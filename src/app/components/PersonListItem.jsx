var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'PersonListItem',
  render: function () {
    var params = {
      personId: this.props.id
    };
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Aliter enim explicari, quod quaeritur, non potest. Quae fere omnia appellantur uno ingenii nomine, easque virtutes qui habent, ingeniosi vocantur. Illum mallem levares, quo optimum atque humanissimum virum, Cn. Duo Reges: constructio interrete. Negare non possum. Quid est, quod ab ea absolvi et perfici debeat? Apparet statim, quae sint officia, quae actiones.";
    return (
      <div>
        {this.props.active ? <b>· </b> : null}
        <Link to='person' params={params}>{this.props.name}</Link>
        <p>{this.props.summary ? text.substr(0, 140).trim() + '…' : text}</p>
      </div>
    );
  }
});
