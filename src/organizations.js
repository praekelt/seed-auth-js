const { request } = require('./http');


const create = (data, opts) => request(opts, {
  method: 'POST',
  url: '/organizations/',
  data
});


const getAll = opts => request(opts, {
  method: 'GET',
  url: '/organizations/'
});


const get = (id, opts) => request(opts, {
  method: 'GET',
  url: `/organizations/${id}`
});


const update = (id, data, opts) => request(opts, {
  method: 'PUT',
  url: `/organizations/${id}`,
  data
});


module.exports = {
  create,
  getAll,
  get,
  update
};
