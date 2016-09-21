var div = React.DOM.div;
var h1 = React.DOM.h1;

var myComponent = div({style:{background: 'blue', height: '100px'}}, h1({style: {color: 'yellow'}}, 'Hello React'));

ReactDOM.render(myComponent, document.getElementById('app'));
