const { expect } = require('chai');
const auth = require('..');


describe("auth.users", () => {
  describe(".create", () => {
    it("should create a user", () => {
      expect(auth.users.create.definition({a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/users/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".list", () => {
    it("should get all users", () => {
      expect(auth.users.list.definition())
        .to.deep.equal({
          method: 'GET',
          url: '/users/',
          options: {}
        });
    });
  });

  describe(".get", () => {
    it("should get a user", () => {
      expect(auth.users.get.definition(2))
        .to.deep.equal({
          method: 'GET',
          url: '/users/2/',
          options: {}
        });
    });
  });

  describe(".update", () => {
    it("should update a user", () => {
      expect(auth.users.update.definition(2, {a: 23}))
        .to.deep.equal({
          method: 'PUT',
          url: '/users/2/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".deactivate", () => {
    it("should deactivate a user", () => {
      expect(auth.users.deactivate.definition(2))
        .to.deep.equal({
          method: 'DELETE',
          url: '/users/2/',
          options: {}
        });
    });
  });
});
