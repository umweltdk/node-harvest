var InvoiceMessages, _isUndefined = require('../mixin');

module.exports = InvoiceMessages = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoiceMessages.prototype.messagesByInvoice = function (invoice_id, cb) {
    var url = '/invoices/' + invoice_id + '/messages';
    this.client.get(url, {}, cb);
};

InvoiceMessages.prototype.getByInvoice = function (invoice_id, message_id, cb) {
    var url = '/invoices/' + invoice_id + '/messages/' + message_id;
    this.client.get(url, {}, cb);
};

InvoiceMessages.prototype.create = function (invoice_id, payload, cb) {
    var url = '/invoices/' + invoice_id + '/messages';
    this.client.post(url, payload, cb);
};

InvoiceMessages.prototype.delete = function (invoice_id, message_id, cb) {
    var url = '/invoices/' + invoice_id + '/messages/' + message_id;
    this.client.delete(url, {}, cb);
};

InvoiceMessages.prototype.markSent = function (invoice_id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/invoices/' + invoice_id + '/messages/mark_as_sent';
    this.client.post(url, payload, cb);
};

InvoiceMessages.prototype.markClosed = function (invoice_id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/invoices/' + invoice_id + '/messages/mark_as_closed';
    this.client.post(url, payload, cb);
};

InvoiceMessages.prototype.markOpen = function (invoice_id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/invoices/' + invoice_id + '/messages/re_open';

    this.client.post(url, payload, cb);
};

InvoiceMessages.prototype.markDraft = function (invoice_id, cb) {
    var url = '/invoices/' + invoice_id + '/messages/mark_as_draft';
    this.client.post(url, {}, cb);
};
