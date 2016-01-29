var TimeTracking, _isUndefined = require('../mixin');
var DayOfYear = require("day-of-year");

module.exports = TimeTracking = function (api) {
    this.api = api;
    this.client = api.client;
};

TimeTracking.prototype.daily = function (payload, cb) {
    var url = '/daily';
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    if (payload.date) {
        var day_of_year = DayOfYear(payload.date);
        url += '/' + day_of_year + '/' + payload.date.getFullYear();
    }

    if(!_isUndefined(payload, 'of_user')) {
        url += '?of_user=' + payload.of_user;

        delete payload.of_user;
    }

    this.client.get(url, {}, cb);
};

TimeTracking.prototype.get = function (id, payload, cb) {
    var url = '/daily/show/' + id;
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    if(!_isUndefined(payload, 'of_user')) {
        url += '?of_user=' + payload.of_user;
        delete payload.of_user;
    }

    this.client.get(url, {}, cb);
};

TimeTracking.prototype.toggleTimer = function (id, payload, cb) {
    var url = '/daily/timer/' + id;
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    if(!_isUndefined(payload, 'of_user')) {
        url += '?of_user=' + payload.of_user;
        delete payload.of_user;
    }
    
    this.client.get(url, {}, cb);
};

TimeTracking.prototype.create = function (payload, cb) {
    var url = '/daily/add';

    if(!_isUndefined(payload, 'of_user')) {
        url += '?of_user=' + payload.of_user;
        delete payload.of_user;
    }

    this.client.post(url, payload, cb);
};

TimeTracking.prototype.delete = function (id, payload, cb) {
    var url = '/daily/delete/' + id;
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    if(!_isUndefined(payload, 'of_user')) {
        url += '?of_user=' + payload.of_user;

        delete payload.of_user;
    }

    this.client.delete(url, {}, cb);
};

TimeTracking.prototype.update = function (id, payload, cb) {
    var url = '/daily/update/' + id;

    if(!_isUndefined(payload, 'of_user')) {
        url += '?of_user=' + payload.of_user;

        delete payload.of_user;
    }

    this.client.post(url, payload, cb);
};
