
import {Before, Given, setDefaultTimeout, Then, When} from 'cucumber';
import {AngularApp} from '../../Pages/AngularApp';

const basic = new AngularApp();

setDefaultTimeout(6000 * 1000);

Given(/I am on Angular page with title (.*)/,  (title: string) => {
    // tslint:disable-next-line:no-console
   console.log(title);
});

Given(/I click on docs/,  () => {
    basic.document();
});

Given(/I click on resources/,  () => {
       basic.resources();

});
