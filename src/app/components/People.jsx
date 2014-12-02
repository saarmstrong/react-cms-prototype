var React = require('react');
var Router = require('react-router');
var PersonListItem = require('./PersonListItem.jsx');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  mixins: [Router.State],
  getDefaultProps: function() {
    return {
      data: [
        {id: 1, name: 'Person 1'},
        {id: 2, name: 'Person 2'},
        {id: 3, name: 'Person 3'}
      ]
    };
  },
  render: function() {
    var params = this.getParams();
    var hasPerson = typeof params.personId === 'string';
    var list = this.props.data.map(function(data, key) {
      return <PersonListItem key={key} summary={hasPerson} {...data} />;
    });
    return (
      <DocumentTitle title='People'>
        <div className='container-fluid'>
          <div className={hasPerson ? 'col-md-4' : null}>
            <div>{list}</div>
          </div>
          <div className={hasPerson ? 'col-md-8' : null}>
            <RouteHandler />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});
