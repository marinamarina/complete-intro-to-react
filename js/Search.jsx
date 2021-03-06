const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { arrayOf, object, string } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0)
            .map(show => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
