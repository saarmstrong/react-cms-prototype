var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Nav = require('./Nav.jsx');
var NavItem = require('./NavItem.jsx');
var Column = require('./Column.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <br />
        <Column span={2}>
          <Nav>
            <NavItem to="home">Dashboard</NavItem>
            <NavItem to="people">People</NavItem>
          </Nav>
        </Column>
        <Column span={10}>
          <RouteHandler {...this.props}/>
        </Column>
      </div>
    );
  }
});
