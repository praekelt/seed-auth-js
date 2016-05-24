const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (data, opts) => ({
  method: 'POST',
  url: '/users/',
  data
});


const getAll = opts => ({
  method: 'GET',
  url: '/users/'
});


const get = (id, opts) => ({
  method: 'GET',
  url: `/users/${id}`
});


const update = (id, data, opts) => ({
  method: 'PUT',
  url: `/users/${id}`,
  data
});


const deactivate = (id, opts) => ({
  method: 'DELETE',
  url: `/users/${id}`
});


module.exports = mapValues({
  create,
  getAll,
  get,
  update,
  deactivate
}, method);
