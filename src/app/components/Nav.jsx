var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <nav>
        <ul className="nav nav-pills nav-stacked">{this.props.children}</ul>
      </nav>
    );
  }
});
