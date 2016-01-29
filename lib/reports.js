var Reports, _isUndefined = require('../mixin');

module.exports = Reports = function (api) {
    this.api = api;
    this.client = api.client;
};

Reports.prototype.timeEntriesByProject = function (project_id, payload, cb) {
    if (_isUndefined(payload, 'from', 'to')) {
        return cb(new Error('getting time entries by project requires UTC dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/projects/' + project_id + '/entries';
    this.client.get(url, payload, cb);
};

Reports.prototype.timeEntriesByUser = function (user_id, payload, cb) {
    if (_isUndefined(payload, 'from', 'to')) {
        return cb(new Error('getting time entries by user requires dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/people/' + user_id + '/entries';
    this.client.get(url, payload, cb);
};

Reports.prototype.expensesByUser = function (user_id, payload, cb) {
    if (_isUndefined(payload, 'from', 'to')) {
        return cb(new Error('getting expenses by user requires dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/people/' + user_id + '/expenses';
    this.client.get(url, payload, cb);
};

Reports.prototype.expensesByProject = function (project_id, payload, cb) {
    if (_isUndefined(payload, 'from', 'to')) {
        return cb(new Error('getting expenses by project requires dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/projects/' + project_id + '/expenses';
    this.client.get(url, payload, cb);
};

Reports.prototype.expensesByClient = function (client_id, payload, cb) {
    if (_isUndefined(payload, 'from', 'to')) {
        return cb(new Error('getting expenses by client requires dates (e.g. YYYYMMDD) \
                              for both the from date and the to date'));
    }

    var url = '/clients/' + client_id + '/expenses';
    this.client.get(url, payload, cb);
};
