var Analysis;

module.exports = Analysis = function(api) {
    this.api = api;
    this.client = api.client;
};

Analysis.prototype.get = function(project_id, payload, cb) {
    if (typeof payload === 'function') {
        cb = payload;
        payload = {
            period: 'lifespan'
        };
    }

    var url = '/projects/' + project_id + '/analysis';
    this.client.get(url, payload, cb);
};
