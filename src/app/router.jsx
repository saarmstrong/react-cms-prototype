var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

module.exports = {
  run: function (el) {
    return Router.run(routes, Router.HistoryLocation, function (Handler, state) {
      var params = state.params;
      React.render(<Handler params={params} />, el);
    });
  }
};
