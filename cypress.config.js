const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    defaultCommandTimeout: 10000,
    specPattern: "cypress/e2e/feature/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  }
});
