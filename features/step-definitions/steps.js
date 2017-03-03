module.exports = function given() {
    this.Given(/^a user on "([^"]*)?"$/, (url, done) => {
      browser.url('http://' + url);
      done();
    });
  };
