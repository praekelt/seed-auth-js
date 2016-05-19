const conf = require('./conf');
const axios = require('axios');
const { conj } = require('./utils');
const { stringify: stringifyQs } = require('query-string');


function request(opts, def, http = axios) {
  return http(configure(opts, def))
    .then(parseResponse, throwResponse);
}


function configure(opts, def) {
  opts = conj(conf, opts);

  def = conj(def, {
    headers: {},
    paramsSerializer: stringifyQs
  });

  def = conj(def, {
    url: opts.prefix + def.url,
    headers: conj(def.headers, {Authorization: `Token ${opts.token}`})
  });

  return def;
}


function parseResponse(resp) {
  return new SeedAuthResult(resp.data);
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
  constructor(data) {
    this.data = data;
  }
}


module.exports = {
  request,
  SeedAuthResult,
  SeedAuthResponseError
};
