const React = require('react');

const MyTitle = React.createClass({
  render: function () {
    const style = { color: this.props.color };
    return (
       <h1 style = { style } >
          {this.props.title}
       </h1>
    )
  }
});

module.exports = MyTitle;
