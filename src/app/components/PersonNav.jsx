var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    var params = {
      personId: this.getParams().personId
    };

    return (
      <div>
        <ul className='nav nav-tabs'>
          <li><Link to="person/foo" params={params}>Foo</Link></li>
          <li><Link to="person/bar" params={params}>Bar</Link></li>
        </ul>
      </div>
    );
  }
});
