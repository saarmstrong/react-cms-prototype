var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var PersonListItem = require('./PersonListItem.jsx');
var Column = require('./Column.jsx');
var PeopleStore = require('../stores/People.js');
var PageTitle = require('./PageTitle.jsx');

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
      data.params = this.props.params;
      data.active = (parseInt(data.params.personId) == data.id);
      return <PersonListItem key={key} summary={hasPerson} {...data} />;
    }, this);
    return (
      <div>
        <DocumentTitle title='People' />
        <Column span={hasPerson ? 4 : 10}>
          <PageTitle>People</PageTitle>
          <div>{list}</div>
        </Column>
        <Column span={hasPerson ? 8 : 2}>
          <Router.RouteHandler {...this.props} />
        </Column>
      </div>
    );
  }
});
