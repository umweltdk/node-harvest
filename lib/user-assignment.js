var UserAssignment, _isUndefined = require('../mixin');

module.exports = UserAssignment = function (api) {
    this.api = api;
    this.client = api.client;
};

UserAssignment.prototype.listByProject = function (project_id, cb) {
    var url = '/projects/' + project_id + '/user_assignments';
    this.client.get(url, {}, cb);
};

UserAssignment.prototype.get = function (project_id, assignment_id, cb) {
    var url = '/projects/' + project_id + '/user_assignments/' + assignment_id;
    this.client.get(url, {}, cb);
};

UserAssignment.prototype.assign = function (project_id, payload, cb) {
    var url = '/projects/' + project_id + '/user_assignments';
    this.client.post(url, payload, cb);

};

UserAssignment.prototype.update = function (project_id, assignment_id, payload, cb) {
    var url = '/projects/' + project_id + '/user_assignments/' + assignment_id;
    this.client.get(url, payload, cb);
};

UserAssignment.prototype.remove = function (project_id, assignment_id, cb) {
    var url = '/projects/' + project_id + '/user_assignments/' + assignment_id;
    this.client.delete(url, {}, cb);
};
