var React = require('react');
var DocumentTitle = require('react-document-title');
var moment = require('moment');
var PageTitle = require('./PageTitle.jsx');

module.exports = React.createClass({
  displayName: 'Dashboard',
  getInitialState: function () {
    return {
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
  },
  componentDidMount: function () {
    var self = this;
    this.interval = setInterval(function () {
      self.setState({
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
    }, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return (
      <div>
        <DocumentTitle title="Dashboard" />
        <PageTitle>Dashboard</PageTitle>
        <p>{this.state.time}</p>
      </div>
    );
  }
});
