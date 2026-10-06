const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      env: 'dev', // Default environment
    },
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    specPattern: 'cypress/e2e/**/*.cy.js',
    videosFolder: 'cypress/videos',
    viewportWidth: 1519.2,
    viewportHeight: 677,
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true, // Takes screenshots for failed tests only
    videoUploadOnPasses: false, // Uploads videos only for failed tests
    // retries: {
    //   runMode: 1,
    //   openMode: 1
    // },
    video: true,
  },
});
