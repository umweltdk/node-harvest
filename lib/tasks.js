var Tasks, _isUndefined = require('../mixin');

module.exports = Tasks = function (api) {
    this.api = api;
    this.client = api.client;
};

Tasks.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/tasks';
    this.client.get(url, payload, cb);
};

Tasks.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/tasks/' + id;
    this.client.get(url, payload, cb);
};

Tasks.prototype.create = function (payload, cb) {
    var url = '/tasks';
    this.client.post(url, payload, cb);
};

Tasks.prototype.update = function (id, payload, cb) {
    var url = '/tasks/' + id;
    this.client.put(url, payload, cb);
};

Tasks.prototype.activate = function (id, cb) {
    var url = '/tasks/' + id + '/activate';
    this.client.get(url, {}, cb);
};

Tasks.prototype.delete = function (id, cb) {
    var url = '/tasks/' + id;
    this.client.delete(url, {}, cb);
};
