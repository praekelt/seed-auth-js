const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (data, options = {}) => ({
  method: 'POST',
  url: '/organizations/',
  data,
  options
});


const list = (options = {}) => ({
  method: 'GET',
  url: '/organizations/',
  options
});


const get = (id, options = {}) => ({
  method: 'GET',
  url: `/organizations/${id}/`,
  options
});


const update = (id, data, options = {}) => ({
  method: 'PUT',
  url: `/organizations/${id}/`,
  data,
  options
});


const archive = (id, options = {}) => ({
  method: 'DELETE',
  url: `/organizations/${id}/`,
  options
});


const addUser = (id, userId, options = {}) => ({
  method: 'POST',
  url: `/organizations/${id}/users/`,
  data: {user_id: userId},
  options
});


const removeUser = (id, userId, options = {}) => ({
  method: 'DELETE',
  url: `/organizations/${id}/users/${userId}/`,
  options
});


const listTeams = (id, options = {}) => ({
  method: 'GET',
  url: `/organizations/${id}/teams/`,
  options
});


module.exports = mapValues({
  create,
  list,
  get,
  update,
  archive,
  addUser,
  removeUser,
  listTeams
}, method);
