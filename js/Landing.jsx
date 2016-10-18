const React = require('react')
const { Link } = require('react-router')
const { func, string } = React.PropTypes
const { hashHistory } = require('react-router')
const { connector } = require('./Store.jsx')

const Landing = React.createClass({
  propTypes: {
    setSearchTerm: func,
    goToSearch: func,
    searchTerm: string
  },
  goToSearch (e) {
    e.preventDefault()
    hashHistory.push('search')
  },
  handleSearchEvent (e) {
    this.props.setSearchTerm(e.target.value)
  },
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input className='search' type='text' placeholder='Search' onChange={this.handleSearchEvent} value={this.props.searchTerm} />
          <Link to='/search' className='browse-all'> or Browse All</Link>
        </form>
      </div>
    )
  }
})

module.exports = connector(Landing)
