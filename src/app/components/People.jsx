var React = require('react');
var Router = require('react-router');
var PersonListItem = require('./PersonListItem.jsx');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      data: [
        {id: 1, name: 'Person 1'},
        {id: 2, name: 'Person 2'},
        {id: 3, name: 'Person 3'}
      ]
    };
  },
  render: function() {
    var list = this.props.data.map(function(data, key) {
      return <PersonListItem key={key} {...data} />;
    });
    return (
      <DocumentTitle title="People">
        <div className="container-fluid">
          <div className="col-md-4">
            <div>{list}</div>
          </div>
          <div className="col-md-8">
            <RouteHandler />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});
