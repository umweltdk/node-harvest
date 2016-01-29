var Clients, _isUndefined = require('../mixin');

module.exports = Clients = function (api) {
    this.api = api;
    this.client = api.client;
};

Clients.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/clients';
    this.client.get(url, payload, cb);
};

Clients.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/clients/' + id;
    this.client.get(url, payload, cb);
};

Clients.prototype.create = function (payload, cb) {
    var url = '/clients';
    this.client.post(url, payload, cb);
};

Clients.prototype.update = function (id, payload, cb) {
    var url = '/clients/' + id;
    this.client.get(url, payload, cb);
};

Clients.prototype.toggleActivation = function (id, cb) {
    var url = '/clients/' + id + '/toggle';
    this.client.post(url, {}, cb);
};

Clients.prototype.delete = function (id, cb) {
    var url = '/clients/' + id;
    this.client.delete(url, {}, cb);
};
