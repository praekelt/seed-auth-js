const replay = require('replay');
const auth = require('..');
const { join } = require('path');


replay.reset('localhost');
replay.fixtures = join(__dirname, '.http-fixtures');

auth.conf.prefix = 'http://localhost:8000';
auth.conf.token = '9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b';
