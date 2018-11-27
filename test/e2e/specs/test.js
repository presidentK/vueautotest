// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end()
  },
  'attr and class test': function(browser){
	 const devServer = browser.globals.devServerURL
	 browser.url(devServer).waitForElementVisible('#app', 5000);
	 browser.expect.element('#app').to.have.attribute('data-org');
	 browser.expect.element('#app').to.be.a('div');
  }
}
