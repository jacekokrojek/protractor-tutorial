import { browser, Config } from "protractor";

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
        
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        
    },
    jasmineNodeOpts:{
        print: function () {}
    }

};
