const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard.jsx')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is my search term'
    }
  },
  handleSearchEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>{this.state.searchTerm}</h1>
          <input className='search-input' type='text' placeholder={this.state.searchTerm} onChange={this.handleSearchEvent} />
        </header>
        <div className='shows'>
          {data.shows.map(show => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
