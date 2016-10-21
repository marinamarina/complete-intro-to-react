const React = require('react')
const Landing = require('./Landing.jsx')
const Search = require('./Search.jsx')
const Layout = require('./Layout.jsx')
const Details = require('./Details.jsx')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')
const { store } = require('./Store.jsx')
const { Provider } = require('react-redux')

const myRoutes = () => (
  <Route path='/' component={Layout} >
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/show/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App

