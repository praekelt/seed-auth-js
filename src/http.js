const globalConf = require('./conf');
const axios = require('axios');
const { conj } = require('./utils');
const extend = require('lodash/extend');
const has = require('lodash/has');
const get = require('lodash/get');
const omit = require('lodash/omit');
const { stringify: stringifyQs } = require('query-string');
const parseLinkHeader = require('parse-link-header');


function method(definition) {
  return extend((...args) => request(definition(...args)), {definition});
}


function request(def, http = axios) {
  return http(configure(def))
    .then(parseResponse, throwResponse);
}


function configure(def) {
  const conf = conj(
    globalConf,
    get(def.options, 'conf'),
    {params: omit(def.options, 'conf')});

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
    this.links = parseLinkHeader(response.headers.link);
  }

  get data() {
    return this.response.data;
  }

  hasPrev() {
    return has(this.links, 'prev');
  }

  hasNext() {
    return has(this.links, 'next');
  }
}


module.exports = {
  method,
  request,
  SeedAuthResult,
  SeedAuthResponseError
};
