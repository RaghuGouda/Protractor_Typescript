import { Actor, DressingRoom } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import {After, AfterAll, BeforeAll, setDefaultTimeout, Status} from 'cucumber';
import { browser, protractor } from 'protractor';
import { config } from '../protractor.conf';

setDefaultTimeout(15000);

// BeforeAll({timeout: 100 * 1000}, async () => {
//     browser.waitForAngularEnabled(false);
//     await browser.get(config.baseUrl);
// });

export class Hooks implements DressingRoom {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWeb.using(protractor.browser),
        );
    }
}
