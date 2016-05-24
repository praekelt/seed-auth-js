const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (data, opts) => ({
  method: 'POST',
  url: '/teams/',
  data
});


const getAll = opts => ({
  method: 'GET',
  url: '/teams/'
});


const get = (id, opts) => ({
  method: 'GET',
  url: `/teams/${id}`
});


const update = (id, data, opts) => ({
  method: 'PUT',
  url: `/teams/${id}`,
  data
});


const archive = (id, opts) => ({
  method: 'DELETE',
  url: `/teams/${id}`
});


const addUser = (id, userId, opts) => ({
  method: 'POST',
  url: `/teams/${id}/users/`,
  data: {user_id: userId}
});


const removeUser = (id, userId, opts) => ({
  method: 'DELETE',
  url: `/teams/${id}/users/${userId}`
});


const addPermission = (id, data, opts) => ({
  method: 'POST',
  url: `/teams/${id}/permissions/`,
  data
});


const removePermission = (id, permissionId, opts) => ({
  method: 'DELETE',
  url: `/teams/${id}/permissions/${permissionId}`
});


module.exports = mapValues({
  create,
  getAll,
  get,
  update,
  archive,
  addUser,
  removeUser,
  addPermission,
  removePermission
}, method);
