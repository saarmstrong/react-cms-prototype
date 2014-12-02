var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Dashboard">
        <p>Dashboard</p>
      </DocumentTitle>
    );
  }
});
