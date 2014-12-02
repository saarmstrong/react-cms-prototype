var React = require('react');
var Column = require('./Column.jsx');
var DocumentTitle = require('react-document-title');
var PageTitle = require('./PageTitle.jsx');

var FormGroup = React.createClass({
  render: function () {
    return <div className="form-group">{this.props.children}</div>;
  }
});

module.exports = React.createClass({
  submitHandler: function (e) {
    e.preventDefault();
    //
  },
  render: function () {
    return (
      <DocumentTitle title="Login">
        <div className="container">
          <Column span={4} offset={4}>
            <PageTitle>Login</PageTitle>
            <form onSubmit={this.submitHandler}>
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
          </Column>
        </div>
      </DocumentTitle>
    );
  }
});
