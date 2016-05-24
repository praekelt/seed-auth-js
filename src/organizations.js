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


const addUser = (id, userId, opts) => ({
  method: 'POST',
  url: `/organizations/${id}/users/`,
  data: {user_id: userId}
});


const removeUser = (id, userId, opts) => ({
  method: 'DELETE',
  url: `/organizations/${id}/users/${userId}`
});


module.exports = mapValues({
  create,
  getAll,
  get,
  update,
  archive,
  addUser,
  removeUser
}, method);
