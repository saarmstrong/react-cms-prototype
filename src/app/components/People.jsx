var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var PersonListItem = require('./PersonListItem.jsx');

module.exports = React.createClass({
  displayName: 'People',
  getDefaultProps: function () {
    return {
      data: [
        {id: 1, name: 'Person 1'},
        {id: 2, name: 'Person 2'},
        {id: 3, name: 'Person 3'}
      ]
    };
  },
  render: function () {
    var hasPerson = typeof this.props.params.personId === 'string';
    var list = this.props.data.map(function (data, key) {
      return <PersonListItem key={key} summary={hasPerson} {...data} />;
    }, this);
    return (
      <DocumentTitle title='People'>
        <div className=''>
          <div className={hasPerson ? 'col-md-4' : 'col-md-10'}>
            <div>{list}</div>
          </div>
          <div className={hasPerson ? 'col-md-8' : 'col-md-2'}>
            <Router.RouteHandler {...this.props} />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});
