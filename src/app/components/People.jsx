var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var PersonListItem = require('./PersonListItem.jsx');
var Column = require('./Column.jsx');
var PeopleStore = require('../stores/People.js');

module.exports = React.createClass({
  displayName: 'People',
  getDefaultProps: function () {
    return {
      params: {
        //
      }
    };
  },
  render: function () {
    var hasPerson = typeof this.props.params.personId === 'string';
    var list = PeopleStore.get().map(function (data, key) {
      return <PersonListItem key={key} summary={hasPerson} {...data} />;
    }, this);
    return (
      <DocumentTitle title='People'>
        <div>
          <Column span={hasPerson ? 4 : 10}>
            <div>{list}</div>
          </Column>
          <Column span={hasPerson ? 8 : 2}>
            <Router.RouteHandler {...this.props} />
          </Column>
        </div>
      </DocumentTitle>
    );
  }
});
