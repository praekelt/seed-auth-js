const { expect } = require('chai');
const auth = require('..');


describe("auth.user", () => {
  describe(".getPermissions", () => {
    it("should get a user's permissions", () => {
      return expect(auth.user.getPermissions.definition())
        .to.deep.equal({
          method: 'GET',
          url: '/user/permissions/',
          options: {}
        });
    });
  });
});
