const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const get = (options = {}) => ({
  method: 'GET',
  url: `/user/`,
  options
});


module.exports = mapValues({
  get
}, method);
