const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing.jsx')
const Search = require('./Search.jsx')
const Layout = require('./Layout.jsx')
const Details = require('./Details.jsx')
const { shows } = require('../public/data')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const { assign } = require('lodash')
const { store } = require('./Store.jsx')
const { Provider } = require('react-redux')

const App = React.createClass({
  chooseShow (nextState, replace) {
    const showArray = shows.filter(show => show.imdbID === nextState.params.id)
    if (showArray.length < 1) {
      return replace('/')
    }
    assign(nextState.params, showArray[0])
  },
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/show/:id' component={Details} onEnter={this.chooseShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
