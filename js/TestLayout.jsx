const React = require('react')

const TestLayout = (props) => (
  <div className='cat'>
    {props.children}
  </div>
)

const {element} = React.PropTypes

TestLayout.propTypes = {
  children: element
}

module.exports = TestLayout
