var React = require('react');
var DocumentTitle = require('react-document-title');

var FormGroup = React.createClass({
  render: function () {
    return <div className="form-group">{this.props.children}</div>;
  }
});

module.exports = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Login">
        <div className="container">
          <br />
          <br />
          <p className="lead">Login</p>
          <form>
            <FormGroup>
              <input type="text" placeholder="Email Address" className="form-control" />
            </FormGroup>
            <FormGroup>
              <input type="password" placeholder="Password" className="form-control" />
            </FormGroup>
            <FormGroup>
              <input type="submit" className="btn btn-default" />
            </FormGroup>
          </form>
        </div>
      </DocumentTitle>
    );
  }
});
