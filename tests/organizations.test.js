const { expect } = require('chai');
const auth = require('..');


describe("auth.organizations", () => {
  describe(".create", () => {
    it("should create an organization", () => {
      expect(auth.organizations.create.definition({a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/organizations/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".list", () => {
    it("should get all organizations", () => {
      expect(auth.organizations.list.definition())
        .to.deep.equal({
          method: 'GET',
          url: '/organizations/',
          options: {}
        });
    });
  });

  describe(".get", () => {
    it("should get an organization", () => {
      expect(auth.organizations.get.definition(1))
        .to.deep.equal({
          method: 'GET',
          url: '/organizations/1',
          options: {}
        });
    });
  });

  describe(".update", () => {
    it("should update an organization", () => {
      expect(auth.organizations.update.definition(1, {a: 23}))
        .to.deep.equal({
          method: 'PUT',
          url: '/organizations/1',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".archive", () => {
    it("should archive an organization", () => {
      expect(auth.organizations.archive.definition(1))
        .to.deep.equal({
          method: 'DELETE',
          url: '/organizations/1',
          options: {}
        });
    });
  });

  describe(".addUser", () => {
    it("should add a user to the organization", () => {
      return expect(auth.organizations.addUser.definition(1, 2))
        .to.deep.equal({
          method: 'POST',
          url: '/organizations/1/users/',
          data: {user_id: 2}
        });
    });
  });

  describe(".removeUser", () => {
    it("should remove a user from the organization", () => {
      return expect(auth.organizations.removeUser.definition(1, 2))
        .to.deep.equal({
          method: 'DELETE',
          url: '/organizations/1/users/2'
        });
    });
  });

  describe(".listTeams", () => {
    it("should list the organization's teams", () => {
      return expect(auth.organizations.listTeams.definition(23))
        .to.deep.equal({
          method: 'GET',
          url: '/organizations/23/teams/'
        });
    });
  });
});
