const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (data, options = {}) => ({
  method: 'POST',
  url: '/users/',
  data,
  options
});


const list = (options = {}) => ({
  method: 'GET',
  url: '/users/',
  options
});


const get = (id, options = {}) => ({
  method: 'GET',
  url: `/users/${id}`,
  options
});


const update = (id, data, options = {}) => ({
  method: 'PUT',
  url: `/users/${id}`,
  data,
  options
});


const deactivate = (id, options = {}) => ({
  method: 'DELETE',
  url: `/users/${id}`,
  options
});


module.exports = mapValues({
  create,
  list,
  get,
  update,
  deactivate
}, method);
