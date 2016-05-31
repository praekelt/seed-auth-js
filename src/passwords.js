const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const reset = (data, options = {}) => ({
  method: 'POST',
  url: `/passwords/resets/`,
  data,
  options
});


const confirm = (data, options = {}) => ({
  method: 'POST',
  url: `/passwords/confirmations/`,
  data,
  options
});


module.exports = mapValues({
  reset,
  confirm
}, method);
