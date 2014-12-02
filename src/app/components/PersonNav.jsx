var React = require('react');
var NavItem = require('./NavItem.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <ul className='nav nav-tabs'>
          <NavItem to="person/foo" params={this.props.params}>Foo</NavItem>
          <NavItem to="person/bar" params={this.props.params}>Bar</NavItem>
        </ul>
      </div>
    );
  }
});
