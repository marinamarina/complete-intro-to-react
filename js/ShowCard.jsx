const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <Link className='show-card-title' to={`/show/${props.imdbID}`}>{props.title} </Link>
      <h4 className='show-card-year'>({props.year}) </h4>
      <p className='show-card-description'>{props.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  imdbID: string.isRequired,
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}

module.exports = ShowCard

