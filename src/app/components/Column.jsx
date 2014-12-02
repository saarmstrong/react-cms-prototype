var React = require('react');

module.exports = React.createClass({
  displayName: 'Column',
  propTypes: {
    span: React.PropTypes.number.isRequired,
    offset: React.PropTypes.number
  },
  render: function () {
    var classes = [
      'col-md-'+this.props.span
    ];
    if (typeof this.props.offset === 'number') {
      classes.push('col-md-offset-'+this.props.offset);
    }
    var className = classes.join(' ');
    return <div className={className}>{this.props.children}</div>;
  }
});
