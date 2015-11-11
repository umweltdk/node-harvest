var Reports, _isUndefined = require('../mixin');

module.exports = Reports = function (api) {
    this.api = api;
    this.client = api.client;
};

Reports.prototype.timeEntriesByProject = function (options, cb) {
    if (_isUndefined(options, 'project_id', 'from', 'to')) {
        return cb(new Error('getting time entries by project requires an id \
                            for the project. It also requires UTC dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/projects/' + options.project_id + '/entries';
    delete options.project_id;
    this.client.get(url, options, cb);
};

Reports.prototype.timeEntriesByUser = function (options, cb) {
    if (_isUndefined(options, 'user_id', 'from', 'to')) {
        return cb(new Error('getting time entries by user requires an id \
                            for the user.  It also requires dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/people/' + options.user_id + '/entries';
    delete options.user_id;
    this.client.get(url, options, cb);
};

Reports.prototype.expensesByUser = function (options, cb) {
    if (_isUndefined(options, 'user_id', 'from', 'to')) {
        return cb(new Error('getting expenses by user requires an id \
                            for the user.  It also requires dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/people/' + options.user_id + '/expenses';
    delete options.user_id;
    this.client.get(url, options, cb);
};

Reports.prototype.expensesByProject = function (options, cb) {
    if (_isUndefined(options, 'project_id', 'from', 'to')) {
        return cb(new Error('getting expenses by project requires an id \
                            for the project.  It also requires dates (e.g. YYYYMMDD) \
                            for both the from date and the to date'));
    }

    var url = '/projects/' + options.project_id + '/expenses';
    delete options.project_id;
    this.client.get(url, options, cb);
};

Reports.prototype.expensesByClient = function (options, cb) {
    if (_isUndefined(options, 'client_id', 'from', 'to')) {
        return cb(new Error('getting expenses by client requires an id \
                              for the client.  It also requires dates (e.g. YYYYMMDD) \
                              for both the from date and the to date'));
    }

    var url = '/clients/' + options.client_id + '/expenses';
    delete options.client_id;
    this.client.get(url, options, cb);
};
