var assert = require('assert'),
    config = require('config'),
    Harvest = require('../index'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    Invoices = harvest.Invoices;

describe('The Invoices API', function() {
    describe('Show recently issued invoices', function() {

        it('should implement the list method', function() {
            assert.equal(typeof Invoices.list, "function");
        });

        var first_invoice;
        it('should return invoices', function(done) {
            Invoices.list({}, function(err, invoices) {
                assert(!err, err);
                assert(Array.isArray(invoices));
                assert.equal(typeof invoices[0], "object");
                first_invoice = invoices[0];
                done();
            });
        });
        it('should filter invoices', function(done) {
            Invoices.list({ status:['paid', 'open'] }, function(err, invoices) {
                assert(!err, err);
                assert(Array.isArray(invoices));
                assert.equal(typeof invoices[0], "object");
                assert.notEqual(invoices[0], first_invoice);
                done();
            });
        });
    });
    describe('Show a particular invoice', function() {
        it('should implement the get method', function() {
            assert.equal(typeof Invoices.get, "function");
        });
    });
    describe('Create a new invoice', function() {
        it('should implement the create method', function() {
            assert.equal(typeof Invoices.create, "function");
        });
    });
    describe('Update existing invoice', function() {
        it('should implement the update method', function() {
            assert.equal(typeof Invoices.update, "function");
        });
    });
    describe('Delete a invoice', function() {
        it('should implement the delete method', function() {
            assert.equal(typeof Invoices.delete, "function");
        });
    });
});
