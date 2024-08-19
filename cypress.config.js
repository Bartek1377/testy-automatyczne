const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/", //base url
    redirectionLimit: 3,  //limit przekierowań na stronie gdyby coś
    retries: {
      "runMode": 1,
      "openMode": 1
    },                  //ilość ponawiania testu w przypadku jakiegoś błędu
    watchForFileChanges: true,
    chromeWebSecurity: false, //
    viewportWidth: 1920, 
    viewportHeight: 1080,
    waitForAnimations: true, //zaczekaj na animacje obiektów, przycisków i gówien 
    testIsolation: false, 
    theme: "dark"
  },
});
