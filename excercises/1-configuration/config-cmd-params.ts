import { browser, Config } from "protractor";
import * as jasmineReporters from "jasmine-reporters";

export const config: Config = {

    directConnect: true,
    restartBrowserBetweenTests: false,
    framework: 'jasmine2',
    
    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        browserName: "chrome",
        /* uncomment to set additional browser parameters 
        chromeOptions: {
            args: ['--no-sandbox'],
            prefs: {
                'plugins.always_open_pdf_externally': true,
                'download': {
                    'directory_upgrade': true,
                    'prompt_for_download': false,
                    'default_directory': process.cwd() + "/data/downloads"
                },
            },
        }, */ 
    },

    specs: [
        "minimal.spec.ts",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        /* Uncomment to enable junit reporting
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            savePath: 'output/',
            consolidateAll: false
        });
        jasmine.getEnv().addReporter(junitReporter); */
    },

	jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },

};

// exports.config = {

//     directConnect: true,

//     specs: ['minimal.spec.js'],

//     capabilities: {
//       'browserName' : 'chrome',
//     },

//     /// MINIMAL CONFIGURATION END /////////////////////////////////////////////////////

// 	onPrepare: function () {

// 	  browser.manage().window().setSize(1680, 1050);	
// 	  browser.ignoreSynchronization = true; 	

//       /* 
// 	  var SpecReporter = require('jasmine-spec-reporter');
// 	  jasmine.getEnv().addReporter(new SpecReporter({
//         displayStacktrace: true
//       })); 
// 	  */
	  
//       /* 
// 	  var jasmineReporters = require('jasmine-reporters');
// 	  jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
//          consolidateAll: true,
//          savePath: 'results/unit',
//          filePrefix: 'xmloutput'
//       }));
// 	  */

//       /* 
// 	  var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// 	  jasmine.getEnv().addReporter( new Jasmine2HtmlReporter({}));
// 	  */
      
//     },

// 	jasmineNodeOpts: {
//       defaultTimeoutInterval: 1200000, // 20 minutes
// 	  /*
// 	  onComplete: null,
// 	  isVerbose: true,
// 	  showColors: true,
// 	  includeStackTrace: true,
// 	  print: function () {}
// 	  */
// 	}

// };
