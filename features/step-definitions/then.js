const chai = require('chai');
const expect = chai.expect;

module.exports = function given() {
    this.Then(/^he should see "([^"]*)?" as titel$/, (expectedTitle, done) => {
      const title = browser.getTitle();
      expect(title).to
            .equal(
                expectedTitle,
                `Expected title to be "${expectedTitle}" but found "${title}"`
              );

      done();
    });
  };
