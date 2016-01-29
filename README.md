[![Build Status](https://travis-ci.org/log0ymxm/node-harvest.svg?branch=master)](https://travis-ci.org/log0ymxm/node-harvest)
[![Coverage Status](https://coveralls.io/repos/log0ymxm/node-harvest/badge.svg?branch=master)](https://coveralls.io/r/log0ymxm/node-harvest?branch=master)
[![npm version](https://badge.fury.io/js/harvest.svg)](http://badge.fury.io/js/harvest)

Harvest is a tool that enables businesses to track time, track projects, manage clients, and invoice. This is a full client API built using node.js.

# Install

    npm install harvest

# Usage
```javascript
    var Harvest = require('harvest'),
    	harvest = new Harvest({
            subdomain: config.harvest.subdomain,
            email: config.harvest.email,
            password: config.harvest.password
        }),
        TimeTracking = harvest.TimeTracking,
        Reports = harvest.Reports;

    TimeTracking.daily({}, function(err, tasks) {
        if (err) throw new Error(err);

        // work with tasks
    });

    Reports.timeEntriesByProject({
        user_id: 123456,
        project_id: 123456,
        from: "2015-01-01",
        to: "2015-12-31"
    }, function(err, reports){
        if (err) throw new Error(err);
        
        // work with reports
    });
```
# Testing

In order to test you will need to create a config file that uses your credentials inside `config/default.json`

    {
      "harvest": {
        "subdomain": "...",
        "email": "...",
        "password": "...",
        "identifier": "...",
        "secret": "...",
        "user_agent": "node-harvest test runner"
      },
      "test":{
        "project_id": "...",
        "user_id": "...",
      }
    }

This API is designed to work either using HTTP Basic authentication, or OAuth so either set of credentials will work. Subdomain is always required.

## Running the tests

    npm test

    # or

    mocha

## Projects using this library

- [impleri/sow](https://github.com/impleri/sow): Command line time tracking utility
- [pingsrl/revenue](https://github.com/pingsrl/revenue): Revenue information from harvest
