const extend = require('lodash/extend');


function conj(...args) {
  return extend({}, ...args);
}


module.exports = {
  conj
};
