var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var App = require('./components/App.jsx');
var People = require('./components/People.jsx');
var Person = require('./components/Person.jsx');
var Login = require('./components/Login.jsx');

var Home = React.createClass({
  render: function() {
    return <p>Home</p>;
  }
});

var Main = React.createClass({
  render: function() {
    return <RouteHandler />;
  }
});

var routes = (
  <Route name="main" handler={Main}>
    <Route name="login" handler={Login} path="/login"/>
    <Route name="app" handler={App} path="/">
      <DefaultRoute name="home" handler={Home}/>
      <Route name="people" handler={People} path="/people">
        <Route name="person" handler={Person} path="/people/:personId"/>
      </Route>
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
