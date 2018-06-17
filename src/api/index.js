import axios from 'axios';

import config from './config.json';

export default class Api {
  constructor({ app, version }) {
    this.token = localStorage.getItem(config.bearerTokenKey);
    this.app = app;
    this.version = version;
    this.axios = axios.create({
      baseUrl: config.apiDomain,
      headers: {
        'content-type': 'application/json',
        Authorization: this.token && `bearer ${this.token}`
      }
    });
    this.endpoint = `${config.apiDomain}/${this.version}/${this.app}`;
  }

  post = (subpoint = '', data, options) => {
    return this.axios.post(`${this.endpoint}${subpoint}`, data, {
      ...options
    });
  };

  get = (subpoint = '', options) => {
    return this.axios.get(`${this.endpoint}${subpoint}`, { ...options });
  };

  delete = (subpoint = '', options) => {
    return this.axios.delete(`${this.endpoint}${subpoint}`, { ...options });
  };
}
