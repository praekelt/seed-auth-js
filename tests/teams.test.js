const { expect } = require('chai');
const auth = require('..');


describe("auth.teams", () => {
  describe(".create", () => {
    it("should create a team", () => {
      expect(auth.teams.create.definition(21, {a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/organizations/21/teams/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".list", () => {
    it("should get all teams", () => {
      expect(auth.teams.list.definition())
        .to.deep.equal({
          method: 'GET',
          url: '/teams/',
          options: {}
        });
    });
  });

  describe(".get", () => {
    it("should get a team", () => {
      expect(auth.teams.get.definition(1))
        .to.deep.equal({
          method: 'GET',
          url: '/teams/1/',
          options: {}
        });
    });
  });

  describe(".update", () => {
    it("should update a team", () => {
      expect(auth.teams.update.definition(1, {a: 23}))
        .to.deep.equal({
          method: 'PUT',
          url: '/teams/1/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".archive", () => {
    it("should archive a team", () => {
      expect(auth.teams.archive.definition(1))
        .to.deep.equal({
          method: 'DELETE',
          url: '/teams/1/',
          options: {}
        });
    });
  });

  describe(".addUser", () => {
    it("should add a user to the team", () => {
      return expect(auth.teams.addUser.definition(1, 2))
        .to.deep.equal({
          method: 'PUT',
          url: '/teams/1/users/2/',
          options: {}
        });
    });
  });

  describe(".removeUser", () => {
    it("should remove a user from the team", () => {
      return expect(auth.teams.removeUser.definition(1, 2))
        .to.deep.equal({
          method: 'DELETE',
          url: '/teams/1/users/2/',
          options: {}
        });
    });
  });

  describe(".addPermission", () => {
    it("should add a permission to the team", () => {
      return expect(auth.teams.addPermission.definition(1, {a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/teams/1/permissions/',
          data: {a: 23},
          options: {}
        });
    });
  });

  describe(".removePermission", () => {
    it("should remove a permission from the team", () => {
      return expect(auth.teams.removePermission.definition(1, 2))
        .to.deep.equal({
          method: 'DELETE',
          url: '/teams/1/permissions/2/',
          options: {}
        });
    });
  });
});
