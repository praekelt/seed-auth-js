const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (data, options = {}) => ({
  method: 'POST',
  url: '/organizations/',
  data,
  options
});


const getAll = (options = {}) => ({
  method: 'GET',
  url: '/organizations/',
  options
});


const get = (id, options = {}) => ({
  method: 'GET',
  url: `/organizations/${id}`,
  options
});


const update = (id, data, options = {}) => ({
  method: 'PUT',
  url: `/organizations/${id}`,
  data,
  options
});


const archive = (id, options = {}) => ({
  method: 'DELETE',
  url: `/organizations/${id}`,
  options
});


module.exports = mapValues({
  create,
  getAll,
  get,
  update,
  archive
}, method);
