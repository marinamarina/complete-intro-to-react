const React = require('react')

const Details = React.createClass({
  render () {
    return (
      <div className='container'>
        <pre>
          <code>
            {JSON.stringify(this.props, null, 4)}
          </code>
        </pre>
      </div>
    )
  }
})

module.exports = Details
