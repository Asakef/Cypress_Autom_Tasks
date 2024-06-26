const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    reporter:"mochawesome",
    "reportOptions":{
      "charts":true,
      "overwrite":true,
      "html":true,
      "json":true,
      "reportDir":"cypress/report/"
    },

    

    "baseUrl":"https://www.saucedemo.com/v1/",

    "testIsolation":false,

    "watchForFileChanges":false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
