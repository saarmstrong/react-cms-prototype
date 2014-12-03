var React = require('react');
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  componentDidMount: function () {
    var el = this.refs.editor.getDOMNode();
    var editor = new SirTrevor.Editor({ el: el });
  },
  render: function () {
    return (
      <div className='container'>
        <DocumentTitle title='Sir Trevor + React' />
        <form>
          <textarea ref='editor' />
        </form>
      </div>
    );
  }
});
