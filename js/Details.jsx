const React = require('react')
const Header = require('./Header.jsx')

const Details = React.createClass({
  render () {
    const params = this.props.params || {}
    const { year, title, description, poster, trailer } = params

    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img src={`public/img/posters/${poster}`} className='video-poster' />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;cpntrols=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

module.exports = Details
