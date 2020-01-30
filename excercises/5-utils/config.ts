import { browser, Config } from "protractor";
import { SpecReporter } from "jasmine-spec-reporter";

export const config: Config = {

    directConnect: true,
    restartBrowserBetweenTests: false,
    framework: 'jasmine2',
    ignoreSynchronization: true,

    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'http://jacekokrojek.github.io',

    capabilities: {
        browserName: "chrome",
    },

    specs: [
        "*.spec.ts",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new SpecReporter({
                // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
                // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
                suite: {
                    displayNumber: true,    // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: true,   // display each pending spec
                    displayDuration: true,  // display each spec duration
                },
                summary: {
                    displaySuccessful: true, // display summary of all successes after execution
                    displayFailed: false,    // display summary of all failures after execution
                    displayPending: false,   // display summary of all pending specs after execution
                },
                customProcessors: []
            })
        );

    },
    jasmineNodeOpts:{
        print: function () {}
    }

};
