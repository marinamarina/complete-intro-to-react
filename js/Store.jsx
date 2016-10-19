const {compose, createStore} = require('redux')
const reactRedux = require('react-redux')
const { assign } = require('lodash')

/*
 * action types
 */
const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {searchTerm: ''}

/*
 * action creators
 */
const changeSearchTerm = (searchTerm) => ({ type: SET_SEARCH_TERM, value: searchTerm })

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

/*
 * dispatchers
*/
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => dispatch(changeSearchTerm(searchTerm))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermReducer(state, action)
    default:
      return state
  }
}

/*
 * reducers
*/
const searchTermReducer = (state, action) => {
  const newState = {}
  assign(newState, state, {searchTerm: action.value})
  return newState
}
const store = createStore(rootReducer, initialState, compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
