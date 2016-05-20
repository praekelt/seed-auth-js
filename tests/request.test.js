const { expect } = require('chai');
const auth = require('..');
const { SeedAuthResponseError } = auth;
const { fail } = expect;


describe("auth.request", () => {
  it("should prepend the prefix to requests", () => {
    return auth.request({prefix: 'http://localhost:8000'}, {
        method: 'GET',
        url: '/organizations/'
      })
      .then(res => expect(res.data).to.be.empty);
  });

  it("should throw error responses", () => {
    return auth.request({prefix: 'http://localhost:8000'}, {
        method: 'GET',
        url: '/i-do-not-exist'
      })
      .then(fail, e => {
        expect(e).to.be.an.instanceof(SeedAuthResponseError);
        expect(e.response.status).to.equal(404);
      });
  });

  it("should support token auth", () => {
    return auth.request({token: '1234'}, {
        method: 'GET',
        url: '/'
      })
      .then(res => expect(res.response.config.headers.Authorization)
        .to.equal('Token 1234'));
  });
});
