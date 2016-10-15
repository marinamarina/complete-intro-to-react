const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard.jsx')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input className='search-input' type='text' placeholder={this.state.searchTerm} onChange={this.handleSearchEvent} />
        </header>
        <div className='shows'>
          {data.shows
            .filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0)
            .map(show => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
