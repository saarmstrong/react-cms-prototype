var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    var title = 'Person '+this.getParams().personId;
    return (
      <DocumentTitle title={title}>
        <h1>{title}</h1>
      </DocumentTitle>
    );
  }
});
