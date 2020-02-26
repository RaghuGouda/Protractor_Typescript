import {setDefaultTimeout} from 'cucumber';
import {by, element, ElementFinder} from 'protractor';
import {ElementHelper} from '../support/elementHelper';

const elementHelper = new ElementHelper();

// tslint:disable-next-line:no-var-requires
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

setDefaultTimeout(6000 * 1000);

export class AngularApp {
  docs: ElementFinder;
  private resource;

  constructor() {
    this.docs     = element(by.xpath("//span[text()='Docs']"));
    this.resource     = element(by.xpath("//span[text()='Resources']"));

    }

  document(){
      // tslint:disable-next-line:no-console
      console.log(this.docs.getText());
      elementHelper.textAssertion(this.docs, 'DOCS');
      return this.docs.click();
}
  resources(){
    return this.resource.click();
}

}
