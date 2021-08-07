"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// https://webdriver.io/docs/configurationfile.html
exports.config = {
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
    afterTest: function (test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Rpby5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vd2Rpby5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1EQUFtRDtBQUN0QyxRQUFBLE1BQU0sR0FBVztJQUMxQixNQUFNLEVBQUUsT0FBTztJQUNmLEtBQUssRUFBRTtRQUNILGdCQUFnQjtRQUNoQiw0QkFBNEI7S0FDL0I7SUFDRCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxXQUFXO0lBQ3RELElBQUksRUFBRSxTQUFTO0lBQ2YsWUFBWSxFQUFFLENBQUM7SUFDZixZQUFZLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxRQUFRO1NBQ3hCLENBQUM7SUFDRiwyRUFBMkU7SUFDM0UsUUFBUSxFQUFFLE1BQU07SUFDaEIsT0FBTyxFQUFFLG9DQUFvQztJQUM3QyxjQUFjLEVBQUUsS0FBSztJQUNyQixzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsU0FBUyxFQUFFLENBQUMsTUFBTTtRQUNkO1lBQ0ksUUFBUTtZQUNSO2dCQUNJLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLDhCQUE4QixFQUFFLElBQUk7Z0JBQ3BDLG9DQUFvQyxFQUFFLEtBQUs7YUFDOUM7U0FDSjtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsUUFBUSxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDckMsRUFBRSxFQUFFLEtBQUs7UUFDVCxPQUFPLEVBQUUsS0FBSztRQUNkLGNBQWM7UUFDZCxpQkFBaUI7S0FDcEI7SUFDRCxTQUFTLEVBQUUsVUFBVSxJQUFJO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztDQUNKLENBQUEifQ==