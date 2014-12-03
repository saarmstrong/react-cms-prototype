var React = require('react');
var DocumentTitle = require('react-document-title');
var PageTitle = require('./PageTitle.jsx');
require('../../vendor/head.js');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {title: 'React + Sir Trevor'};
  },
  getInitialState: function () {
    return {
      loading: true
    };
  },
  load: function (callback) {
    var self = this;
    head.load('/vendor/sir-trevor.css');
    head.load([
      '/vendor/jquery.js',
      '/vendor/lodash.js',
      '/vendor/eventable.js',
      '/vendor/sir-trevor.js'
    ], function () {
      self.setState({loading: false});
      callback();
    });
  },
  componentDidMount: function () {
    var self = this;
    this.load(function () {
      var $el = window.$(self.refs.editor.getDOMNode());
      self.editor = new window.SirTrevor.Editor({ el: $el });
    });
  },
  componentDidUnmount: function () {
    this.editor.destroy();
    delete this.editor;
  },
  submitHandler: function (e) {
    e.preventDefault();
    this.editor.onFormSubmit(true);
    console.log(this.editor.store.retrieve());
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
