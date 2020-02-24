import {Task} from '@serenity-js/core';
import {Click, Text} from '@serenity-js/protractor';
import {setDefaultTimeout} from 'cucumber';
import { AngularApp } from './ui';

setDefaultTimeout(6000 * 1000);

export class BasicOperation {

    // tslint:disable-next-line:no-empty
    constructor() {
    }
    Document(){
      // AngularApp.docs.click();
        Task.where(`#actor confirms`,
            Click.on(AngularApp.docs),
        );
  }
    Resources(){
      // AngularApp.resource.click();
        Task.where(`#actor confirms`,
            Click.on(AngularApp.resource),
        );
  }
}
