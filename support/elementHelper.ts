
// tslint:disable-next-line:no-var-requires
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

export class ElementHelper {
    textAssertion(element, value){
        element.getText().then(function (res) {
// tslint:disable-next-line:no-console
            expect(res).equal(value);
                // tslint:disable-next-line:no-console
            console.log(res);
            },
            function (err) {
// tslint:disable-next-line:no-console
                console.log(err);
            });

    }

}
