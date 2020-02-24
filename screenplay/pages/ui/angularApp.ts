import {setDefaultTimeout} from 'cucumber';
import {by, element} from 'protractor';

setDefaultTimeout(6000 * 1000);

export class AngularApp {
    static docs     = element(by.xpath("//span[text()='Docs']"));
    static resource     = element(by.xpath("//span[text()='Resources']"));
}
