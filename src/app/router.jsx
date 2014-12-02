var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var App = require('./components/App.jsx');
var People = require('./components/People.jsx');
var Person = require('./components/Person.jsx');
var Login = require('./components/Login.jsx');
var Dashboard = require('./components/Dashboard.jsx');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var NotFound = React.createClass({
  render: function() {
    return <p>Nope!</p>;
  }
});

var Main = React.createClass({
  render: function() {
    return <RouteHandler />;
  }
});

var PersonFoo = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="Person Foo">
        <p>This is foo...</p>
      </DocumentTitle>
    );
  }
});

var PersonBar = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="Person Bar">
        <p>This is bar...</p>
      </DocumentTitle>
    );
  }
});

var routes = (
  <Route name="main" handler={Main} path="/">
    <NotFoundRoute handler={NotFound}/>
    <Route name="login" handler={Login} path="/login"/>
    <Route name="app" handler={App} path="/">
      <DefaultRoute name="home" handler={Dashboard}/>
      <Route name="people" handler={People} path="people">
        <Route name="person" handler={Person} path=":personId">
          <Route name="person/foo" handler={PersonFoo} path="foo"/>
          <Route name="person/bar" handler={PersonBar} path="bar"/>
        </Route>
      </Route>
    </Route>
  </Route>
);

module.exports = {
  init: function(node) {
    return Router.run(routes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler />, node);
    });
  }
};
