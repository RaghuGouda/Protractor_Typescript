'use strict';
import {Before,Given, setDefaultTimeout, Then, When} from 'cucumber';
const apickli = require('apickli/apickli.js');

setDefaultTimeout(60 * 1000);

    Before(function() {
        this.apickli = new apickli.Apickli('https', 'lt.qa.apps.green.dev.cds.transport.nsw.gov.au');
        this.apickli.addRequestHeader('Content-Type','application/json');
    });






