import { Ensure, equals } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, WithStage } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import {Before, Given, setDefaultTimeout, Then, When} from 'cucumber';
import {browser, by, element} from 'protractor';
import {BasicOperation} from '../../screenplay/pages';
import {Hooks} from '../../support/hooks';
const basic = new BasicOperation();

Before(() => engage(new Hooks()));
setDefaultTimeout(6000 * 1000);

Given(/I am on Angular page with title (.*)/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to('/start'),
    ),
);

// Given(/I am on Angular page with title (.*)/,  (actorName: string) => {
//     // return element(by.xpath("//span[text()='Docs']")).click();
// });

Given(/I click on docs/,  () => {
      // basic.Document();
    return element(by.xpath("//span[text()='Docs']")).click();
});

Given(/I click on resources/,  () => {
      // return basic.Resources();
   return  element(by.xpath("//span[text()='Resources']")).click();
});
