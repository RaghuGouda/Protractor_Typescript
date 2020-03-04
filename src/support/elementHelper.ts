// tslint:disable-next-line:no-var-requires
import {browser} from "protractor";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

export class ElementHelper {
    elementClick(element){
        return element.click()
    }
    waitAfterClick(element,time){
        return element.click().then(function () {
            browser.sleep(time);
        });
    }
    waitForElement(time){
       return browser.sleep(time);
    }
    mouseMoveClick(element,time){
        return browser.actions().mouseMove(element).click().perform().then(function () {
            browser.sleep(time);
        })
    }

}
