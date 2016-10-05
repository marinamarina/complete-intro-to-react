var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle.jsx');

var myComponent = function() {
  return (
    <div>
      <MyTitle color='peru' title='Hello Peru' />
      <MyTitle color='rebeccapurple' title='Hello cats' />
      <MyTitle color='#fo6do6' title='omg' />
    </div>
  )
};

ReactDOM.render(myComponent, document.getElementById('app'));
