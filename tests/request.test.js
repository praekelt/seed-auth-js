const { expect } = require('chai');
const auth = require('..');
const { fail } = expect;
const { conj } = auth.utils;

const {
  SeedAuthUnauthorizedError,
  SeedAuthForbiddenError,
  SeedAuthNotFoundError,
  SeedAuthResponseError
} = auth;


describe("auth.request", () => {
  it("should prepend the prefix to requests", () => {
    return auth.request({
        method: 'GET',
        url: '/organizations/',
        options: {conf: {prefix: 'http://localhost:8001'}}
      })
      .then(res => expect(res.data).to.be.empty);
  });

  it("should support token auth", () => {
    return auth.request({
        method: 'GET',
        url: '/',
        options: {conf: {token: '1234'}}
      })
      .then(res => expect(res.response.config.headers.Authorization)
        .to.equal('Token 1234'));
  });

  it("should support passing of query params", () => {
    return auth.request({
        method: 'GET',
        url: '/',
        options: {
          foo: 23,
          bar: false,
          conf: {baz: 'quux'}
        }
      })
      .then(res => expect(res.response.config.params).to.deep.equal({
        foo: 23,
        bar: false
      }));
  });

  it("should throw an error for 401 responses", () => {
    return auth.request({
        method: 'GET',
        url: '/401/'
      })
      .then(fail, e => {
        expect(e.response.status).to.equal(401);
        expect(e).to.be.an.instanceof(SeedAuthUnauthorizedError);
      });
  });

  it("should throw an error for 403 responses", () => {
    return auth.request({
        method: 'GET',
        url: '/403/'
      })
      .then(fail, e => {
        expect(e.response.status).to.equal(403);
        expect(e).to.be.an.instanceof(SeedAuthForbiddenError);
      });
  });

  it("should throw an error for 404 responses", () => {
    return auth.request({
        method: 'GET',
        url: '/404/'
      })
      .then(fail, e => {
        expect(e.response.status).to.equal(404);
        expect(e).to.be.an.instanceof(SeedAuthNotFoundError);
      });
  });

  it("should throw error responses that don't have their own error class",
  () => {
    return auth.request({
        method: 'GET',
        url: '/500/'
      })
      .then(fail, e => {
        expect(e.response.status).to.equal(500);
        expect(e).to.be.an.instanceof(SeedAuthResponseError);
      });
  });

  describe("result", () => {
    describe(".hasPrev()", () => {
      it("should return whether a previous page exists", () => {
        return Promise.resolve()
          .then(() => auth.request({
            method: 'GET',
            url: '/organizations/',
            options: {
              page: 1,
              page_size: 3
            }
          }))
          .then(res => expect(res.hasPrev()).to.be.false)
          .then(() => auth.request({
            method: 'GET',
            url: '/organizations/',
            options: {
              page: 2,
              page_size: 3
            }
          }))
          .then(res => expect(res.hasPrev()).to.be.true);
      });
    });

    describe(".nextNext()", () => {
      it("should return whether a next page exists", () => {
        return Promise.resolve()
          .then(() => auth.request({
            method: 'GET',
            url: '/organizations/',
            options: {
              page: 1,
              page_size: 3
            }
          }))
          .then(res => expect(res.hasNext()).to.be.true)
          .then(() => auth.request({
            method: 'GET',
            url: '/organizations/',
            options: {
              page: 2,
              page_size: 3
            }
          }))
          .then(res => expect(res.hasNext()).to.be.false);
      });
    });

    describe(".prev()", () => {
      it("should return whether a previous page exists", () => {
        const def = {
          method: 'GET',
          url: '/organizations/'
        };

        return Promise.resolve()
          .then(() => auth.request(conj(def, {
            options: {
              page: 1,
              page_size: 3
            }
          })))
          .then(res => res.prev())
          .then(res => expect(res).to.be.null)
          .then(() => auth.request(conj(def, {
            options: {
              page: 2,
              page_size: 3
            }
          })))
          .then(res => res.prev())
          .then(res => expect(res.response.config.params).to.deep.equal({
            page_size: '3'
          }));
      });
    });

    describe(".next()", () => {
      it("should return whether a next page exists", () => {
        const def = {
          method: 'GET',
          url: '/organizations/'
        };

        return Promise.resolve()
          .then(() => auth.request(conj(def, {
            options: {
              page: 1,
              page_size: 3
            }
          })))
          .then(res => res.next())
          .then(res => expect(res.response.config.params).to.deep.equal({
            page: '2',
            page_size: '3'
          }))
          .then(() => auth.request(conj(def, {
            options: {
              page: 2,
              page_size: 3
            }
          })))
          .then(res => res.next())
          .then(res => expect(res).to.be.null);
      });
    });
  });
});
