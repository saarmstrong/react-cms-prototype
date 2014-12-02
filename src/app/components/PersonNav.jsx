var React = require('react');
var Router = require('react-router');
var NavItem = require('./NavItem.jsx');

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    var params = {
      personId: this.getParams().personId
    };

    return (
      <div>
        <ul className='nav nav-tabs'>
          <NavItem to="person/foo" params={params}>Foo</NavItem>
          <NavItem to="person/bar" params={params}>Bar</NavItem>
        </ul>
      </div>
    );
  }
});
