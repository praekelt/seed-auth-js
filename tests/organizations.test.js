const { expect } = require('chai');
const auth = require('..');


describe("auth.organizations", () => {
  describe(".getAll", () => {
    it("should get all organizations", () => {
      return auth.organizations.getAll()
        .then(res => expect(res.data).to.be.empty);
    });
  });
});
