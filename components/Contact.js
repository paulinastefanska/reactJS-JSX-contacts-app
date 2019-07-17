var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="contactItem">
        <img className="contactImage" src={"http://icons.veryicon.com/png/System/Qetto%202/contacts.png"}/>
        <p className="contactLabel">First name: {this.props.item.firstName}</p>
        <p className="contactLabel">Last name: {this.props.item.lastName}</p>
        <a href="mailto: ${this.props.item.email}">this.props.item.email</a>
      </div>
    );
  }
});