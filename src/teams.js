const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (orgId, data, options = {}) => ({
  method: 'POST',
  url: `/organizations/${orgId}/teams/`,
  data,
  options
});


const getAll = (options = {}) => ({
  method: 'GET',
  url: '/teams/',
  options
});


const get = (id, options = {}) => ({
  method: 'GET',
  url: `/teams/${id}`,
  options
});


const update = (id, data, options = {}) => ({
  method: 'PUT',
  url: `/teams/${id}`,
  data,
  options
});


const archive = (id, options = {}) => ({
  method: 'DELETE',
  url: `/teams/${id}`,
  options
});


const addUser = (id, userId, options = {}) => ({
  method: 'POST',
  url: `/teams/${id}/users/`,
  data: {user_id: userId},
  options
});


const removeUser = (id, userId, options = {}) => ({
  method: 'DELETE',
  url: `/teams/${id}/users/${userId}`,
  options
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
