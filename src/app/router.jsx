var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var App = require('./components/App.jsx');
var People = require('./components/People.jsx');
var Person = require('./components/Person.jsx');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({
  render: function() {
    return <p>Home</p>;
  }
});

var Base = React.createClass({
  render: function() {
    return null;
  }
});

var NotFound = React.createClass({
  render: function() {
    return <p>Nope!</p>;
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    <NotFoundRoute handler={NotFound}/>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="people" handler={People} path="/people">
      <Route name="person" handler={Person} path="/people/:personId"/>
    </Route>
  </Route>
);

module.exports = {
  init: function() {
    return Router.run(routes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler />, document.getElementById('app'));
    });
  }
};
