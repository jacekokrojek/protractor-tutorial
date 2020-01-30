import { browser, Config } from "protractor";
import * as jasmineReporters from "jasmine-reporters";

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
    },

};
