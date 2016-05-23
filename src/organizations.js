const { request } = require('./http');


const create = (d, opts) => request(opts, {
  method: 'POST',
  url: '/organizations/',
  data: d
});


const getAll = opts => request(opts, {
  method: 'GET',
  url: '/organizations/'
});


module.exports = {
  create,
  getAll
};
