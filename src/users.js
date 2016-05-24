const { request } = require('./http');


const create = (data, opts) => request(opts, {
  method: 'POST',
  url: '/users/',
  data
});


const getAll = opts => request(opts, {
  method: 'GET',
  url: '/users/'
});


const get = (id, opts) => request(opts, {
  method: 'GET',
  url: `/users/${id}/`
});


const update = (id, data, opts) => request(opts, {
  method: 'PUT',
  url: `/users/${id}/`,
  data
});


const deactivate = (id, opts) => request(opts, {
  method: 'DELETE',
  url: `/users/${id}/`
});


module.exports = {
  create,
  getAll,
  get,
  update,
  deactivate
};
