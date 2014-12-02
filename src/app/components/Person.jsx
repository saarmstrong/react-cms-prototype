var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var PersonNav = require('./PersonNav.jsx');

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    var title = 'Person '+this.getParams().personId;
    return (
      <DocumentTitle title={title}>
        <div>
          <h1>{title}</h1>
          <PersonNav />
          <br />
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }
});
