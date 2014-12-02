var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  displayName: 'Dashboard',
  getInitialState: function () {
    return {
      seconds: 0
    };
  },
  componentDidMount: function () {
    var self = this;
    this.interval = setInterval(function () {
      self.setState({seconds: self.state.seconds + 1});
    }, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return (
      <DocumentTitle title="Dashboard">
        <div>
          <p>Dashboard</p>
          <p>{this.state.seconds}s</p>
        </div>
      </DocumentTitle>
    );
  }
});
