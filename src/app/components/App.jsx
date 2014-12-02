var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Nav = require('./Nav.jsx');
var NavItem = require('./NavItem.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <br />
        <div className="col-md-2">
          <Nav>
            <NavItem to="home">Dashboard</NavItem>
            <NavItem to="people">People</NavItem>
          </Nav>
        </div>
        <div className="col-md-10">
          <RouteHandler />
        </div>
      </div>
    );
  }
});
