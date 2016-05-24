const { expect } = require('chai');
const auth = require('..');


describe("auth.teams", () => {
  describe(".create", () => {
    it("should create a team", () => {
      expect(auth.teams.create.definition({a: 23}))
        .to.deep.equal({
          method: 'POST',
          url: '/teams/',
          data: {a: 23}
        });
    });
  });

  describe(".getAll", () => {
    it("should get all teams", () => {
      expect(auth.teams.getAll.definition())
        .to.deep.equal({
          method: 'GET',
          url: '/teams/'
        });
    });
  });

  describe(".get", () => {
    it("should get a team", () => {
      expect(auth.teams.get.definition(1))
        .to.deep.equal({
          method: 'GET',
          url: '/teams/1'
        });
    });
  });

  describe(".update", () => {
    it("should update a team", () => {
      expect(auth.teams.update.definition(1, {a: 23}))
        .to.deep.equal({
          method: 'PUT',
          url: '/teams/1',
          data: {a: 23}
        });
    });
  });

  describe(".archive", () => {
    it("should archive a team", () => {
      expect(auth.teams.archive.definition(1))
        .to.deep.equal({
          method: 'DELETE',
          url: '/teams/1'
        });
    });
  });

  describe(".addUser", () => {
    it("should add a user to the team", () => {
      return expect(auth.teams.addUser.definition(1, 2))
        .to.deep.equal({
          method: 'POST',
          url: '/teams/1/users/',
          data: {user_id: 2}
        });
    });
  });

  describe(".removeUser", () => {
    it("should remove a user from the team", () => {
      return expect(auth.teams.removeUser.definition(1, 2))
        .to.deep.equal({
          method: 'DELETE',
          url: '/teams/1/users/2'
        });
    });
  });
});
