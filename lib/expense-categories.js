var ExpenseCategories, _isUndefined = require('../mixin');

module.exports = ExpenseCategories = function (api) {
    this.api = api;
    this.client = api.client;
};

ExpenseCategories.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/expense_categories';
    this.client.get(url, payload, cb);
};

ExpenseCategories.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/expense_categories/' + id;
    this.client.get(url, payload, cb);
};

ExpenseCategories.prototype.create = function (payload, cb) {
    var url = '/expense_categories';
    this.client.post(url, payload, cb);
};

ExpenseCategories.prototype.update = function (id, payload, cb) {
    var url = '/expense_categories/' + id;
    this.client.put(url, payload, cb);

};

ExpenseCategories.prototype.toggle = function (id, cb) {
    var url = '/expense_categories/' + id + '/toggle';
    this.client.post(url, {}, cb);
};

ExpenseCategories.prototype.delete = function (id, cb) {
    var url = '/expense_categories/' + id;
    this.client.delete(url, {}, cb);
};
