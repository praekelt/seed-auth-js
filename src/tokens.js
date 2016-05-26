const { method } = require('./http');
const mapValues = require('lodash/mapValues');


const create = (options = {}) => ({
  method: 'POST',
  url: `/tokens/`,
  options
});


module.exports = mapValues({
  create
}, method);
