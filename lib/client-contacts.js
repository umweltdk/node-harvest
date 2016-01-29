var ClientContacts, _isUndefined = require('../mixin');

module.exports = ClientContacts = function (api) {
    this.api = api;
    this.client = api.client;
};

ClientContacts.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/contacts';
    this.client.get(url, payload, cb);
};

ClientContacts.prototype.listByClient = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/clients/' + id + '/contacts';
    this.client.get(url, payload, cb);
};

ClientContacts.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/contacts/' + id;
    this.client.get(url, payload, cb);
};

ClientContacts.prototype.create = function (payload, cb) {
    var url = '/contacts';
    this.client.post(url, payload, cb);
};

ClientContacts.prototype.update = function (id, payload, cb) {
    var url = '/contacts/' + id;
    this.client.put(url, payload, cb);
};

ClientContacts.prototype.delete = function (id, cb) {
    var url = '/contacts/' + id;
    this.client.delete(url, {}, cb);
};
