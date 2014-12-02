var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Login">
        <div className="container">
          <br />
          <br />
          <p className="lead">Login</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Email Address" className="form-control" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-default" />
            </div>
          </form>
        </div>
      </DocumentTitle>
    );
  }
});
