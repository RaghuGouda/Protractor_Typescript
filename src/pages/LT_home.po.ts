import chai = require('chai');
import chaiAsPromised = require("chai-as-promised");
import { browser, by, element, ElementFinder, protractor } from "protractor";


const EC = protractor.ExpectedConditions;
chai.use(chaiAsPromised as any);
const expect = chai.expect;

export class LTHomePage {

    public menuLink: ElementFinder;

    constructor() {
        this.menuLink = browser.element(by.css("button[aria-label='MENU']"));

    }

    public async open() {
        await browser.get("https://lt.qa.apps.green.dev.cds.transport.nsw.gov.au/");
        return await browser.wait(EC.visibilityOf(this.menuLink));
    }

    public async clickLiveTrafficTMenu() {
       
        await browser.sleep(1000);
        await this.menuLink.click();
        //await browser.sleep(3000);
    }

}
