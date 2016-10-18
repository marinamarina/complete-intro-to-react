const React = require('react')
const ShowCard = require('./ShowCard.jsx')
const Header = require('./Header.jsx')
const { object, string } = React.PropTypes
const { connector } = require('./Store.jsx')

const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
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
