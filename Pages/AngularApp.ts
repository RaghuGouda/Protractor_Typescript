import {setDefaultTimeout} from 'cucumber';
import {by, element, ElementFinder} from 'protractor';

setDefaultTimeout(6000 * 1000);

export class AngularApp {
  docs: ElementFinder;
  private resource: ElementFinder;
  constructor() {
    this.docs     = element(by.xpath("//span[text()='Docs']"));
    this.resource     = element(by.xpath("//span[text()='Resources']"));
    }
  document(){
this.docs.click();
}
  resources(){
      this.resource.click();
}
}
