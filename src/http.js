const conf = require('./conf');
const axios = require('axios');
const { conj } = require('./utils');
const { stringify: stringifyQs } = require('query-string');


function request(opts = {}, def, http = axios) {
  return http(configure(opts, def))
    .then(parseResponse, throwResponse);
}


function configure(opts, def) {
  opts = conj(conf, opts);

  return conj(def, {
    url: opts.prefix + def.url,
    paramsSerializer: stringifyQs,
    headers: conj(def.headers, {Authorization: `Token ${opts.token}`})
  });
}


function parseResponse(resp) {
  return new SeedAuthResult(resp);
}


function throwResponse(obj) {
  if (obj instanceof Error) throw obj;
  else throw new SeedAuthResponseError(obj);
}


class SeedAuthResponseError extends Error {
  constructor(response) {
    super();
    this.response = response;
  }
}


class SeedAuthResult {
  constructor(response) {
    this.response = response;
  }

  get data() {
    return this.response.data;
  }
}


module.exports = {
  request,
  SeedAuthResult,
  SeedAuthResponseError
};
