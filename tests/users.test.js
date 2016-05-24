const { expect } = require('chai');
const auth = require('..');


describe("auth.users", () => {
  describe(".create", () => {
    it("should create a user", () => {
      return auth.users.create({
          first_name: 'Jon',
          last_name: 'Snow',
          email: 'jonsnow@castleblack.net',
          password: 'gh0st',
          admin: false
        })
        .then(res => expect(res.data).deep.equal({
          id: 2,
          url: 'http://localhost:8000/users/2/',
          active: true,
          first_name: 'Jon',
          last_name: 'Snow',
          email: 'jonsnow@castleblack.net',
          organizations: [],
          teams: [],
          admin: false
        }));
    });
  });

  describe(".getAll", () => {
    it("should get all users", () => {
      return auth.users.getAll()
      .then(res => expect(res.data).deep.equal([{
          id: 1,
          url: 'http://localhost:8000/users/1/',
          active: true,
          admin: true,
          email: '',
          first_name: '',
          last_name: '',
          organizations: [],
          teams: []
      }, {
          id: 2,
          url: 'http://localhost:8000/users/2/',
          active: true,
          first_name: 'Jon',
          last_name: 'Snow',
          email: 'jonsnow@castleblack.net',
          organizations: [],
          teams: [],
          admin: false
        }]));
    });
  });

  describe(".get", () => {
    it("should get a user", () => {
      return auth.users.get(2)
        .then(res => expect(res.data).deep.equal({
          id: 2,
          url: 'http://localhost:8000/users/2/',
          active: true,
          first_name: 'Jon',
          last_name: 'Snow',
          email: 'jonsnow@castleblack.net',
          organizations: [],
          teams: [],
          admin: false
        }));
    });
  });

  describe(".update", () => {
    it("should update a user", () => {
      return auth.users.update(2, {
          id: 2,
          url: 'http://localhost:8000/users/2/',
          active: true,
          first_name: 'Jo',
          last_name: 'Snow',
          email: 'jonsnow@castleblack.net',
          organizations: [],
          teams: [],
          admin: false
        })
        .then(res => expect(res.data).deep.equal({
          id: 2,
          url: 'http://localhost:8000/users/2/',
          active: true,
          first_name: 'Jo',
          last_name: 'Snow',
          email: 'jonsnow@castleblack.net',
          organizations: [],
          teams: [],
          admin: false
        }));
    });
  });

  describe(".deactivate", () => {
    it("should deactivate a user", () => {
      return auth.users.deactivate(2)
        .then(res => expect(res.data).to.be.empty);
    });
  });
});
