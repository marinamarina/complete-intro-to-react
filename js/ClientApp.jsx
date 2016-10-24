const React = require('react')
const Layout = require('./Layout.jsx')
const TestLayout = require('./TestLayout.jsx')
const { Router, browserHistory } = require('react-router')
const { store } = require('./Store.jsx')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure') // shim for node.js
  }
}

// config object
const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], (error) => {
        cb(null, require('./Landing.jsx'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          cb(null, require('./Search.jsx'))
        })
      }
    },
    {
      path: 'show/:id',
      getComponent (location, cb) {
        require.ensure([], (error) => {
          cb(null, require('./Details.jsx'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.History = browserHistory

module.exports = App

