const { expect } = require('chai');
const auth = require('..');


describe("auth.user", () => {
  describe(".get", () => {
    it("should get a user's description", () => {
      return expect(auth.user.get.definition())
        .to.deep.equal({
          method: 'GET',
          url: '/user',
          options: {}
        });
    });
  });
});
