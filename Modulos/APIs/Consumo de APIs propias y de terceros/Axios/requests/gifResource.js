let axios = require('axios');
let defaults = require('./default');

const url = 'gifs/';

// HAGO QUE HOME HAGA ALGO - EN ROUTER

let gifResource = {
  random: function () {
    return axios({
      ...defaults,
      method: 'GET',
      url: url + 'random',
      params: {
        api_key: '3Q9RfJ9uN58TALnT7CD8Inix2guAW8CQ',
      },
    });
  },
  trending: function () {
    return axios({
      ...defaults,
      method: 'GET',
      url: url + 'trending',
      params: {
        api_key: '3Q9RfJ9uN58TALnT7CD8Inix2guAW8CQ',
      },
    });
  },
  search: function (query) {

  },
  getById: function() {

  }
};

module.exports = gifResource;
