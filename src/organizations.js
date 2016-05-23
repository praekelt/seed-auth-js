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


const get = (id, opts) => request(opts, {
  method: 'GET',
  url: `/organizations/${id}`
});


module.exports = {
  create,
  getAll,
  get
};
