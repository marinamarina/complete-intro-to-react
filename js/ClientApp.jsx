const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing.jsx')
const Search = require('./Search.jsx')
const Layout = require('./Layout.jsx')
const Details = require('./Details.jsx')
const { shows } = require('../public/data')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} shows={shows} />
      <Route path='/show/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
