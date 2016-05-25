const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (teamId, data, options = {}) => ({
  method: 'POST',
  url: `/teams/${teamId}/permissions/`,
  data,
  options
});


const remove = (id, options = {}) => ({
  method: 'DELETE',
  url: `/permissions/${id}`,
  options
});


module.exports = mapValues({
  create,
  remove
}, method);
