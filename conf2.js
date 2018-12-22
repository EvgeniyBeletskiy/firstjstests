// An example configuration file.
exports.config = {
  directConnect: true,
  
  // The address of a running selenium server. 
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['-start-maximized'] 
  }
  }, {
    'browserName': 'firefox'
  }, {
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
}],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['test_spec2.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
