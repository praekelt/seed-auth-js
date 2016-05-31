const { expect } = require('chai');
const auth = require('..');


describe("auth.tokens", () => {
  describe(".create", () => {
    it("should create a token", () => {
      return expect(auth.tokens.create.definition())
        .to.deep.equal({
          method: 'POST',
          url: '/tokens/',
          options: {}
        });
    });
  });
});
