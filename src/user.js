const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const getPermissions = (options = {}) => ({
  method: 'GET',
  url: `/user/permissions/`,
  options
});


module.exports = mapValues({
  getPermissions
}, method);
