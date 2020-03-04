
const
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer,TakePhotosOfInteractions,TakePhotosOfFailures } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    isCI = require('is-ci');

exports.config = {
    baseUrl: 'https://lt.qa.apps.green.dev.cds.transport.nsw.gov.au/',

    directConnect: true,
    allScriptsTimeout: 110000,
    getPageTimeout: 60000,

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

suites:{
regression:['./features']
},

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfFailures),     // or Photographer.whoWill(TakePhotosOfInteractions),
            new SerenityBDDReporter(),
        ]
    },
    onPrepare: function() {
        browser.manage().window().maximize();
    },
    cucumberOpts: {
        require: ["./src/step_definitions/*.ts","./src/support/*.ts"],
        'require-module':   [ 'ts-node/register'],
        strict:  true,
        keepAlive: true,
        tags:['@e2e']
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', "--disable-gpu", "--window-size=1920,1080","--no-sandbox"],
            prefs: {'profile.default_content_setting_values.geolocation': 2}

        }
    },
    onComplete:function () {
        // browser.executeScript('window.localStorage.clear();');
        // browser.executeScript('window.sessionStorage.clear();');
        // browser.driver.manage().deleteAllCookies();
    }
};
