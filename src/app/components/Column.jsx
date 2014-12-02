var React = require('react');

module.exports = React.createClass({
  displayName: 'Column',
  propTypes: {
    span: React.PropTypes.number.isRequired
  },
  render: function () {
    var className = 'col-md-'+this.props.span;
    return <div className={className}>{this.props.children}</div>;
  }
});
