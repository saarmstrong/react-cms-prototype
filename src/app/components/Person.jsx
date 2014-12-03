var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var PersonNav = require('./PersonNav.jsx');
var Link = Router.Link;
var PageTitle = require('./PageTitle.jsx');

module.exports = React.createClass({
  displayName: 'Person',
  render: function () {
    var title = 'Person '+this.props.params.personId;
    return (
      <div>
        <DocumentTitle title={title} />
        <Link to="person" {...this.props}>
          <PageTitle>{title}</PageTitle>
        </Link>
        <PersonNav {...this.props}/>
        <br />
        <Router.RouteHandler {...this.props}/>
      </div>
    );
  }
});
