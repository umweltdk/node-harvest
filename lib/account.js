var Account;

module.exports = Account = function (api) {
    this.api = api;
    this.client = api.client;
};

Account.prototype.get = function (payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {};
    }

    var url = '/account/who_am_i';
    this.client.get(url, payload, cb);
};

Account.prototype.rate_limit_status = function (options, cb) {
    var url = '/account/rate_limit_status';
    this.client.get(url, {}, cb);
};
