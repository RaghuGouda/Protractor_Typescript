import {browser, by, element} from "protractor";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

export class Assertions {
    textAssertion(element, value){
        element.getText().then(function (res) {
                expect(res).equal(value);
                console.log(res);
            },
            function (err) {
                console.log(err);
            });

    }

    elementCount(element, value){
        element.count().then(function (res) {
                console.log("count" +res);
               return expect(res).to.equal(value);
            },
            function (err) {
                console.log(err);
            });

    }
}
