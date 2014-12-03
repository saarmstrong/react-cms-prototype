var React = require('react');
var DocumentTitle = require('react-document-title');
var PageTitle = require('./PageTitle.jsx');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {title: 'React + Sir Trevor'};
  },
  componentDidMount: function () {
    var $el = window.$(this.refs.editor.getDOMNode());
    this.editor = new window.SirTrevor.Editor({ el: $el });
  },
  componentDidUnmount: function () {
    this.editor.destroy();
  },
  submitHandler: function (e) {
    e.preventDefault();
    this.editor.onFormSubmit(true);
    console.log(this.editor.dataStore);
  },
  render: function () {
    return (
      <div className='container'>
        <DocumentTitle title={this.props.title} />
        <PageTitle>{this.props.title}</PageTitle>
        <form onSubmit={this.submitHandler}>
          <textarea ref='editor' />
          <br />
          <input type='submit' className='btn btn-default btn-lg btn-block' />
        </form>
      </div>
    );
  }
});
