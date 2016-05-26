const { expect } = require('chai');
const auth = require('..');


describe("auth.passwords", () => {
  describe(".reset", () => {
    it("should create a reset request", () => {
      return expect(auth.passwords.reset.definition({a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/passwords/resets/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".confirm", () => {
    it("should create a confirmation", () => {
      return expect(auth.passwords.confirm.definition({a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/passwords/confirmations/',
          data: {a: 23},
          options: {}
        });
    });
  });
});
