const React = require('react')
const Header = require('./Header')
const axios = require('axios')
const { arrayOf, object, func } = React.PropTypes
const { connector } = require('./Store')

const Details = React.createClass({
  propTypes: {
    shows: arrayOf(object).isRequired,
    setOmdbData: func,
    omdbData: object,
    params: object
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
    .then((response) => {
      this.props.setOmdbData(response.data)
    })
    .catch((error) => {
      console.error('error', error)
    })
  },
  assignShow (id) {
    return this.props.shows.filter(show => show.imdbID === id)[0]
  },
  render () {
    const { year, title, description, poster, trailer } = this.assignShow(this.props.params.id)

    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <h3 className='video-year'>{this.props.omdbData.imdbRating}</h3>
          <img src={`/public/img/posters/${poster}`} className='video-poster' />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;cpntrols=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

module.exports = connector(Details)
