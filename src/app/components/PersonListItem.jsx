var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    var params = {
      personId: this.props.id
    };
    return (
      <div>
        <Link to='person' params={params}>{this.props.name}</Link>
      </div>
    );
  }
});
