(function() {
  var filename, page, renderFunction, url, _ref;
  page = new WebPage();
  if (phantom.args.length !== 2) {
    console.log('Usage: screenshot.js URL filename width height');
    phantom.exit();
  }
  _ref = phantom.args, url = _ref[0], filename = _ref[1];
  renderFunction = function() {
    page.render(filename);
    console.log(filename);
    return phantom.exit();
  };
  page.open(url, function(status) {
    if (status !== 'success') {
      console.log("An error occurred. Status: " + status);
    }
    return window.setTimeout(renderFunction, 5000);
  });
}).call(this);
