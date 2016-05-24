const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (data, opts) => ({
  method: 'POST',
  url: '/organizations/',
  data
});


const getAll = opts => ({
  method: 'GET',
  url: '/organizations/'
});


const get = (id, opts) => ({
  method: 'GET',
  url: `/organizations/${id}`
});


const update = (id, data, opts) => ({
  method: 'PUT',
  url: `/organizations/${id}`,
  data
});


const archive = (id, opts) => ({
  method: 'DELETE',
  url: `/organizations/${id}`
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
