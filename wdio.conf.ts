import { Config } from "@wdio/sync";

// https://webdriver.io/docs/configurationfile.html
export const config: Config = {
    runner: 'local',
    specs: [
        './test/**/*.ts'
        // './test/createAccount.ts'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    baseUrl: 'https://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        [
            "allure",
            {
                outputDir: "allure-results",
                disableMochaHooks: true,
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],
    mochaOpts: {
        requires: ['tsconfig-paths/register'],
        ui: 'bdd',
        timeout: 60000,
        // retries: 3,
        // grep: '@SMOKE'
    },
    afterTest: function (test: { error: undefined; }) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    }
}