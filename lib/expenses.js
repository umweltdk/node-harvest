var Expenses, _isUndefined = require('../mixin');

module.exports = Expenses = function (api) {
    this.api = api;
    this.client = api.client;
};

Expenses.prototype.list = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/expenses';
    this.client.get(url, payload, cb);
};

Expenses.prototype.get = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/expenses/' + id;
    this.client.get(url, payload, cb);
};

Expenses.prototype.create = function (payload, cb) {
    var url = '/expenses';
    this.client.post(url, payload, cb);
};

Expenses.prototype.update = function (id, payload, cb) {
    var url = '/expenses/' + id;
    this.client.put(url, payload, cb);
};

Expenses.prototype.delete = function (id, cb) {
    var url = '/expenses/' + id;
    this.client.delete(url, {}, cb);
};

Expenses.prototype.attachReceipt = function (id, cb) {
    // TODO post image data
    // POST /expenses/#{expense_id}/receipt HTTP/1.1
    // User-Agent: #{Your app name here}
    // Host: #{yoursubdomain}.harvestapp.com
    // Accept: application/xml
    // Authorization: Basic (insert your authentication string here)
    // Content-Length: 47899
    // Content-Type: multipart/form-data; boundary=------------------------------b7edea381b46
    // ------------------------------b7edea381b46
    // Content-Disposition: form-data; name="expense[receipt]"; filename="hotel.jpg"
    // Content-Type: image/jpeg
    //
    // #{ BINARY IMAGE DATA }
    //
    // ------------------------------b7edea381b46

    var url = '/expenses/' + id + '/receipt';
    this.client.post(url, {}, cb);
};

Expenses.prototype.getReceipt = function (id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/expenses/' + id + '/receipt';
    this.client.get(url, payload, cb);
};
