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

  describe(".getAll", () => {
    it("should get all organizations", () => {
      expect(auth.organizations.getAll.definition())
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
});
