const React = require('react')
const ShowCard = require('./ShowCard.jsx')
const Header = require('./Header.jsx')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm})
  },
  render () {
    return (
      <div className='container'>
        <Header
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          showSearch
        />
        <div className='shows'>
          {this.props.route.shows
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
