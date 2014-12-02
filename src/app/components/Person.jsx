var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var PersonNav = require('./PersonNav.jsx');
var Link = Router.Link;

module.exports = React.createClass({
  displayName: 'Person',
  render: function () {
    var title = 'Person '+this.props.params.personId;
    return (
      <DocumentTitle title={title}>
        <div>
          <Link to="person" {...this.props}>
            <h1>{title}</h1>
          </Link>
          <PersonNav {...this.props}/>
          <br />
          <Router.RouteHandler {...this.props}/>
        </div>
      </DocumentTitle>
    );
  }
});
