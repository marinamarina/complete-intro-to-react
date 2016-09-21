var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render: function() {
    return (
       h1(null, this.props.title)
    );
  }
});

var myComponent = div(
  null,
  React.createElement(MyTitle, {title: 'Hello React'}),
  React.createElement(MyTitle, {title: 'Hello cat'})
);

ReactDOM.render(myComponent, document.getElementById('app'));
