const { request } = require('./http');


const getAll = opts => request(opts, {
  method: 'GET',
  url: '/organizations/'
});


module.exports = {
  getAll
};
