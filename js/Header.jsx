const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchEvent (e) {
    this.props.handleSearchTermChange(e.target.value)
  },
  render () {
    let utilsSpace

    if (this.props.showSearch) {
      utilsSpace = <input className='search-input' type='text' placeholder={this.props.searchTerm} onChange={this.handleSearchEvent} />
    } else {
      utilsSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Go Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
          svideo
          </Link>
        </h1>
        {utilsSpace}
      </header>
    )
  }
})

module.exports = Header
