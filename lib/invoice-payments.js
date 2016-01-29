var InvoicePayments, _isUndefined = require('../mixin');

module.exports = InvoicePayments = function (api) {
    this.api = api;
    this.client = api.client;
};

InvoicePayments.prototype.paymentsByInvoice = function (invoice_id, cb) {
    var url = '/invoices/' + invoice_id + '/payments';
    this.client.get(url, {}, cb);
};

InvoicePayments.prototype.getByInvoice = function (invoice_id, payment_id, cb) {
    var url = '/invoices/' + invoice_id + '/payments/' + payment_id;
    this.client.get(url, {}, cb);
};

InvoicePayments.prototype.create = function (invoice_id, payload, cb) {
    var url = '/invoices/' + invoice_id + '/payments';
    this.client.post(url, payload, cb);
};

InvoicePayments.prototype.delete = function (invoice_id, payment_id, cb) {
    var url = '/invoices/' + invoice_id + '/payments/' + payment_id;
    this.client.delete(url, {}, cb);
};
