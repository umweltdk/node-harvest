var assert = require('assert'),
    config = require('config'),
    Harvest = require('../index'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    Reports = harvest.Reports;

describe('The Reports API', function() {
    describe('Get all time entries logged to a project for a given timeframe', function() {
        it('should implement the timeEntriesByProject method', function() {
            assert.equal(typeof Reports.timeEntriesByProject, "function");
        });
        it('should get time entries for a project at in a given timeframe', function(done){
            Reports.timeEntriesByProject({
                project_id: config.test.project_id,
                from: "2015-01-01",
                to: "2015-12-31"
            }, function(err, reports){
                assert(!err, err);
                assert(Array.isArray(reports));
                assert.equal(typeof reports[0], "object");
                done();
            });
        });
    });
    describe('Get all time entries by the current user logged to a project for a given timeframe', function() {
        it('should get time entries for a user in a project at in a given timeframe', function(done){
            Reports.timeEntriesByProject({
                user_id: config.test.user_id,
                project_id: config.test.project_id,
                from: "2015-01-01",
                to: "2015-12-31"
            }, function(err, reports){
                assert(!err, err);
                assert(Array.isArray(reports));
                assert.equal(typeof reports[0], "object");
                done();
            });
        });
    });
    describe('Get all time entries logged by a user for a given timeframe', function() {
        it('should implement the timeEntriesByCurrentUser method', function() {
            assert.equal(typeof Reports.timeEntriesByUser, "function");
        });

        it('should get all time entries for a user at in a given timeframe', function(done){
            Reports.timeEntriesByUser({
                user_id: config.test.user_id,
                billable: true,
                is_closed: true,
                from: "2015-01-01",
                to: "2015-12-31"
            }, function(err, reports){
                assert(!err, err);
                assert(Array.isArray(reports));
                assert.equal(typeof reports[0], "object");
                done();
            });
        });
    });
    describe('Get all expense entries logged by a user for a given timeframe', function() {
        it('should implement the expensesByUser method', function() {
            assert.equal(typeof Reports.expensesByUser, "function");
        });
    });
    describe('Get all expenses entries to a project for a given timeframe', function() {
        it('should implement the expensesByProject method', function() {
            assert.equal(typeof Reports.expensesByProject, "function");
        });
    });
    describe('Get all expenses entries to a client for a given timeframe', function() {
        it('should implement the expensesByClient method', function() {
            assert.equal(typeof Reports.expensesByClient, "function");
        });
    });
});
