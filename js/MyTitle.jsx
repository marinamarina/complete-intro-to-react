const React = require('react');
const h1 = React.DOM.h1;

const MyTitle = React.createClass({
  render: function () {
    return (
      const style = { color: this.props.color };
       <h1 style= { style }>
          {this.props.title}
       </h1>
    );
  }
});

module.exports = MyTitle;
