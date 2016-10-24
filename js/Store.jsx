const {compose, createStore} = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')
const { assign } = require('lodash')

/*
 * action types
 */
const SET_SEARCH_TERM = 'setSearchTerm'
const SET_OMDB_DATA = 'setOmdbData'
const initialState = {
  searchTerm: '',
  shows: shows,
  omdbData: {}
}

/*
 * action creators
 */
const changeSearchTerm = (searchTerm) => ({ type: SET_SEARCH_TERM, value: searchTerm })
const changeOmdbData = (omdbData) => ({ type: SET_OMDB_DATA, value: omdbData })

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    shows: state.shows,
    omdbData: state.omdbData
  }
}

/*
 * dispatchers
*/
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => dispatch(changeSearchTerm(searchTerm)),
    setOmdbData: (omdbData) => dispatch(changeOmdbData(omdbData))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermReducer(state, action)
    case SET_OMDB_DATA:
      return omdbDataReducer(state, action)
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
const omdbDataReducer = (state, action) => {
  const newState = {}
  assign(newState, state, {omdbData: action.value})
  return newState
}
const store = createStore(rootReducer, initialState, compose(
      typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
