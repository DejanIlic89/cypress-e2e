const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // video: true,
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: false,
      html: true,
      json: true
    },
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  },
});
