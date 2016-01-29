var InvoiceCategories, _isUndefined = require('../mixin');

module.exports = InvoiceCategories = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoiceCategories.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/invoice_item_categories';
    this.client.get(url, payload, cb);
};

InvoiceCategories.prototype.create = function (payload, cb) {
    var url = '/invoice_item_categories';
    this.client.post(url, payload, cb);
};

InvoiceCategories.prototype.update = function (id, payload, cb) {
    var url = '/invoice_item_categories/' + id;
    this.client.put(url, payload, cb);
};

InvoiceCategories.prototype.delete = function (id, cb) {
    var url = '/invoice_item_categories/' + id;
    this.client.delete(url, {}, cb);
};
