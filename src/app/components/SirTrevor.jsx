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
    head.load([
      '/vendor/jquery.js',
      '/vendor/lodash.js',
      '/vendor/eventable.js',
      '/vendor/sir-trevor.js',
      '/vendor/sir-trevor.css'
    ], function () {
      callback();
    });
  },
  componentDidMount: function () {
    var component = this;
    this.load(function () {
      var $el = window.$(component.refs.editor.getDOMNode());
      component.editor = new window.SirTrevor.Editor({ el: $el });
      component.setState({loading: false});
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
        {this.state.loading ? <p>Loading…</p> : null}
        <form onSubmit={this.submitHandler} className={this.state.loading ? 'hidden' : null}>
          <textarea ref='editor' />
          <br />
          <input type='submit' className='btn btn-default btn-lg btn-block' />
        </form>
      </div>
    );
  }
});
