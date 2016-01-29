var Projects, _isUndefined = require('../mixin');

module.exports = Projects = function (api) {
    this.api = api;
    this.client = api.client;
};

Projects.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/projects';
    this.client.get(url, payload, cb);
};

Projects.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/projects/' + id;
    this.client.get(url, payload, cb);
};

Projects.prototype.create = function (id, payload, cb) {
    var url = '/projects';
    this.client.post(url, payload, cb);
};

Projects.prototype.update = function (id, payload, cb) {
    var url = '/projects/' + id;
    this.client.put(url, payload, cb);
};

Projects.prototype.toggleActivation = function (id, cb) {
    var url = '/projects/' + id + '/toggle';
    this.client.put(url, {}, cb);
};

Projects.prototype.delete = function (id, cb) {
    var url = '/projects/' + id;
    this.client.delete(url, {}, cb);
};
