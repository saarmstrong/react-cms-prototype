var React = require('react');
var Router = require('react-router');
var App = require('./components/App.jsx');
var People = require('./components/People.jsx');
var Person = require('./components/Person.jsx');
var Login = require('./components/Login.jsx');
var Dashboard = require('./components/Dashboard.jsx');
var NotFound = require('./components/NotFound.jsx');
var PersonFoo = require('./components/PersonFoo.jsx');
var PersonBar = require('./components/PersonBar.jsx');
var SirTrevor = require('./components/SirTrevor.jsx');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

module.exports = [
  <Route name="login" handler={Login} path="/login"/>,
  <Route name="app" handler={App} path="/">
    <NotFoundRoute handler={NotFound}/>
    <DefaultRoute name="home" handler={Dashboard}/>
    <Route name="sir-trevor" handler={SirTrevor} path="sir-trevor"/>
    <Route name="people" handler={People} path="people">
      <Route name="person" handler={Person} path=":personId">
        <Route name="person/foo" handler={PersonFoo} path="foo"/>
        <Route name="person/bar" handler={PersonBar} path="bar"/>
      </Route>
    </Route>
  </Route>
];
