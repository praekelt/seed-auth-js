const { expect } = require('chai');
const auth = require('..');
const { SeedAuthResponseError } = auth;
const { fail } = expect;


describe("auth.request", () => {
  it("should prepend the prefix to requests", () => {
    return auth.request({
        method: 'GET',
        url: '/organizations/',
        options: {conf: {prefix: 'http://localhost:8001'}}
      })
      .then(res => expect(res.data).to.be.empty);
  });

  it("should throw error responses", () => {
    return auth.request({
        method: 'GET',
        url: '/i-do-not-exist'
      })
      .then(fail, e => {
        expect(e).to.be.an.instanceof(SeedAuthResponseError);
        expect(e.response.status).to.equal(404);
      });
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
  });
});
