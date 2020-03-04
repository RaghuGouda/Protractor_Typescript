'use strict';
const prettyJson = require('prettyjson');
const _ = require('lodash');
const {Before, Given, When, Then} = require('cucumber');

import {LT_api} from '../pages/LT_api'

const LTAPI=new LT_api();

const stepContext = {};

const prettyPrintJson = function(json) {
    const output = {
        stepContext,
        testOutput: json,
    };

    return prettyJson.render(output, {
        noColor: true,
    });
};

const callbackWithAssertion = function(callback, assertion) {
    if (assertion.success) {
        callback();
    } else {
        callback(prettyPrintJson(assertion));
    }
};

Before(function(scenarioResult, callback) {
    callback();
});

When(/^I GET (.*)$/, function(resource, callback)  {
    this.apickli.get(resource, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        callback();
    });
});

Then(/^response code should be (.*)$/, function(responseCode, callback) {
    const assertion = this.apickli.assertResponseCode(responseCode);
    callbackWithAssertion(callback, assertion);
});

Then(/^I store the value of body path (.*) as (.*) in global scope$/, function(path, variableName, callback) {
    this.apickli.storeValueOfResponseBodyPathInGlobalScope(path, variableName);
    callback();
});

Then(/^I store the value (.*) at path (.*) in jsonfile (.*)$/, function(value,path,file,callback) {
    var keyValue = null;
    if (this.apickli.getGlobalVariable((value)) == undefined) {
        if (value != "true" && value != "false" && value.match(/^\d+$/) == null) {
            keyValue = value;
        } else if (value.match(/^\d+$/) != null && value != "true" && value != "false") {
            keyValue = parseInt(value);
        } else {
            keyValue = JSON.parse(value);
        }
    } else {
        keyValue = this.apickli.getGlobalVariable(value);
    }
    LTAPI.jsonReadWrite(file,path,keyValue);
    callback();
});



