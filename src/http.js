const globalConf = require('./conf');
const axios = require('axios');
const { conj } = require('./utils');
const get = require('lodash/get');
const omit = require('lodash/omit');
const { stringify: stringifyQs } = require('query-string');


function request(opts, def, http = axios) {
  return http(configure(opts, def))
    .then(parseResponse, throwResponse);
}


function configure(opts, def) {
  const conf = conj(
    globalConf,
    get(opts, 'conf'),
    {params: omit(opts, 'conf')});

  return conj(def, {
    url: conf.prefix + def.url,
    paramsSerializer: stringifyQs,
    headers: conj(def.headers, {Authorization: `Token ${conf.token}`}),
    params: conj(def.params, conf.params)
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
