import {After, AfterAll, BeforeAll, setDefaultTimeout, Status} from 'cucumber';
import { browser, protractor } from 'protractor';
import { config } from '../protractor.conf';

setDefaultTimeout(15000);

BeforeAll({timeout: 100 * 1000}, async () => {
    browser.waitForAngularEnabled(false);
    await browser.get(config.baseUrl);
});
