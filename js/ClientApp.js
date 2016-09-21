var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render: function() {
    return h1({ style: {color: 'yellow'} }, 'Hello React!');
  }
});

var myComponent = div(
  {style:
    {background: 'blue', height: '100px'}
  },
  React.createElement(MyTitle, null),
  React.createElement(MyTitle, null)
);

ReactDOM.render(myComponent, document.getElementById('app'));
