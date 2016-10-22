const React = require('react')
const Header = require('./Header.jsx')
const axios = require('axios')
const { arrayOf, object } = React.PropTypes
const { connector } = require('./Store.jsx')

const Details = React.createClass({
  propTypes: {
    shows: arrayOf(object).isRequired,
    params: object
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
    .then((response) => {
      this.setState({omdbData: response.data})
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
          <h3 className='video-year'>{this.state.omdbData.imdbRating}</h3>
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
