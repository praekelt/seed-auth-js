const { expect } = require('chai');
const auth = require('..');


describe("auth.permissions", () => {
  describe(".create", () => {
    it("should add a permission to the team", () => {
      return expect(auth.permissions.create.definition(1, {a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/teams/1/permissions/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".remove", () => {
    it("should remove a permission from the team", () => {
      return expect(auth.permissions.remove.definition(1))
        .to.deep.equal({
          method: 'DELETE',
          url: '/permissions/1',
          options: {}
        });
    });
  });
});
