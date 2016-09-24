var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle');
var div = React.DOM.div;

var myComponent = div(
  null,
  React.createElement(MyTitle, {color: 'peru', title: 'Hello React'}),
  React.createElement(MyTitle, {color: 'rebeccapurple', title: 'Hellooo cat'})
);

ReactDOM.render(myComponent, document.getElementById('app'));
