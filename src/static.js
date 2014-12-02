require('node-jsx').install();

var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes.jsx');

var route = process.argv[2];

Router.run(routes, route, function (Thing) {
  var Factory = React.createFactory(Thing);
  var root = Factory();
  var html = React.renderToString(root);
  console.log(html);
});
