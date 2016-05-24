const { expect } = require('chai');
const auth = require('..');


describe("auth.method", () => {
  it("should make requests using the given definition", () => {
    const meth = auth.method((endpoint, options) => ({
      method: 'GET',
      url: endpoint,
      options
    }));

    return meth('/organizations/', {conf: {prefix: 'http://localhost:8001'}})
      .then(res => expect(res.data).to.be.empty);
  });
});
