var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="page-header">
        <h1>{this.props.children}</h1>
      </div>
    );
  }
});
