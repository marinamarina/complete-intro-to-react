/* global React ReactDOM */
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
       h1({style: {color: this.props.color}}, this.props.title)
    )
  }
})

var myComponent = div(
  null,
  React.createElement(MyTitle, {color: 'peru', title: 'Hello React'}),
  React.createElement(MyTitle, {color: 'rebeccapurple', title: 'Hello cat'})
)

ReactDOM.render(myComponent, document.getElementById('app'))
