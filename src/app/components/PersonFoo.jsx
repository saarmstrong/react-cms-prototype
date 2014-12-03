var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  displayName: 'PersonFoo',
  render: function () {
    var title = 'Person '+this.props.params.personId+' Foo';
    return (
      <div>
        <DocumentTitle title={title} />
        <p>This is foo...</p>
      </div>
    );
  }
});
