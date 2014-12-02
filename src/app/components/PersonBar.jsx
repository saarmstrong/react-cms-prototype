var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  displayName: 'PersonBar',
  render: function () {
    var title = 'Person '+this.props.params.personId+' Bar';
    return (
      <DocumentTitle title={title}>
        <p>This is bar...</p>
      </DocumentTitle>
    );
  }
});
