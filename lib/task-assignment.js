var TaskAssignment, _isUndefined = require('../mixin');

module.exports = TaskAssignment = function (api) {
    this.api = api;
    this.client = api.client;
};

TaskAssignment.prototype.listByProject = function (project_id, cb) {
    var url = '/projects/' + project_id + '/task_assignments';
    this.client.get(url, {}, cb);
};

TaskAssignment.prototype.get = function (project_id, task_id, cb) {
    var url = '/projects/' + project_id + '/task_assignments/' + task_id;
    this.client.get(url, {}, cb);
};

TaskAssignment.prototype.assign = function (project_id, payload, cb) {
    var url = '/projects/' + project_id + '/task_assignments';
    this.client.post(url, payload, cb);
};

TaskAssignment.prototype.create = function (project_id, payload, cb) {
    var url = '/projects/' + project_id + '/task_assignments';
    this.client.post(url, payload, cb);
};

TaskAssignment.prototype.update = function (project_id, task_id, payload, cb) {
    var url = '/projects/' + project_id + '/task_assignments/' + task_id;
    this.client.put(url, payload, cb);
};

TaskAssignment.prototype.remove = function (project_id, task_id, cb) {
    var url = '/projects/' + project_id + '/task_assignments/' + task_id;
    this.client.delete(url, {}, cb);
};
