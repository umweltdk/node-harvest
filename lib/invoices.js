var Invoices, _isUndefined = require('../mixin');

module.exports = Invoices = function (api) {
    this.api = api;
    this.client = api.client;
};

Invoices.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/invoices';
    this.client.get(url, payload, cb);
};

Invoices.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/invoices/' + id;
    this.client.get(url, payload, cb);
};

Invoices.prototype.create = function (payload, cb) {
    var url = '/invoices';
    this.client.post(url, payload, cb);

};

Invoices.prototype.update = function (id, payload, cb) {
    var url = '/invoices/' + id;
    this.client.put(url, payload, cb);
};

Invoices.prototype.delete = function (id, cb) {
    var url = '/invoices/' + id;
    this.client.delete(url, {}, cb);
};
