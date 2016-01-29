var People, _isUndefined = require('../mixin');

module.exports = People = function (api) {
    this.api = api;
    this.client = api.client;
};

People.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/people';
    this.client.get(url, payload, cb);
};

People.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/people/' + id;
    this.client.get(url, payload, cb);
};

People.prototype.create = function (payload, cb) {
    var url = '/people';
    this.client.post(url, payload, cb);
};

People.prototype.update = function (id, payload, cb) {
    var url = '/people/' + id;
    this.client.put(url, payload, cb);
};

People.prototype.toggle = function (id, cb) {
    var url = '/people/' + id + '/toggle';
    this.client.post(url, {}, cb);
};

People.prototype.delete = function (id, cb) {
    var url = '/people/' + id;
    this.client.delete(url, {}, cb);
};

People.prototype.reset = function (id, cb) {
    var url = '/people/' + id + '/reset_password';
    this.client.post(url, {}, cb);
};
