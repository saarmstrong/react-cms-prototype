var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var State = Router.State;

module.exports = React.createClass({
  displayName: 'NavItem',
  mixins: [Navigation, State],
  propTypes: {
    to: React.PropTypes.string.isRequired,
    params: React.PropTypes.object,
    query: React.PropTypes.object,
    onClick: React.PropTypes.func
  },
  handleClick: function (e) {
    e.preventDefault();
    this.transitionTo(this.props.to, this.props.params, this.props.query);
  },
  getHref: function () {
    return this.makeHref(this.props.to, this.props.params, this.props.query);
  },
  render: function () {
    var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
    var href = this.getHref();
    return (
      <li className={isActive ? 'active' : ''}>
        <a href={href} onClick={this.handleClick}>{this.props.children}</a>
      </li>
    );
  }
});
