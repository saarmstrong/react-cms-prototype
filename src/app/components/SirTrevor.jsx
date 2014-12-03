var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  componentDidMount: function () {
    var $editor = window.$(this.refs.editor.getDOMNode());
    var $el = $editor.append('<textarea />');
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
        <DocumentTitle title='Sir Trevor + React' />
        <br />
        <form onSubmit={this.submitHandler}>
          <div ref='editor'></div>
          <br />
          <input type='submit' className='btn btn-default btn-lg btn-block' />
        </form>
      </div>
    );
  }
});
