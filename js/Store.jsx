const redux = require('redux')
const reactRedux = require('react-redux')
const { assign } = require('lodash')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchterm: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermReducer(state, action)
    default:
      return state
  }
}

const searchTermReducer = (state, action) => {
  const newState = {}
  assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer)

const mapStateToProps = (state) => {
  return { searchterm: state.searchterm }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store}
