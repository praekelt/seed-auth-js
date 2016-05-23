const { expect } = require('chai');
const auth = require('..');


describe("auth.organizations", () => {
  describe(".create", () => {
    it("should create an organization", () => {
      return auth.organizations.create({name: 'Nights Watch'})
        .then(res => expect(res.data).deep.equal({
          archived: false,
          id: 1,
          name: 'Nights Watch',
          teams: [],
          url: 'http://localhost:8000/organizations/1/',
          users: []
        }));
    });
  });

  describe(".getAll", () => {
    it("should get all organizations", () => {
      return auth.organizations.getAll()
        .then(res => expect(res.data).deep.equal([{
          archived: false,
          id: 1,
          name: 'Nights Watch',
          teams: [],
          url: 'http://localhost:8000/organizations/1/',
          users: []
        }]));
    });
  });

  describe(".get", () => {
    it("should get an organization", () => {
      return auth.organizations.get(1)
        .then(res => expect(res.data).deep.equal({
          archived: false,
          id: 1,
          name: 'Nights Watch',
          teams: [],
          url: 'http://localhost:8000/organizations/1/',
          users: []
        }));
    });
  });

  describe(".update", () => {
    it("should update an organization", () => {
      return auth.organizations.update(1, {
          archived: false,
          id: 1,
          name: 'Nights Watch',
          teams: [],
          url: 'http://localhost:8000/organizations/1/',
          users: []
        })
        .then(res => expect(res.data).deep.equal({
          archived: false,
          id: 1,
          name: 'Nights Watch',
          teams: [],
          url: 'http://localhost:8000/organizations/1/',
          users: []
        }));
    });
  });
});
