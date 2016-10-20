/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const {rootReducer} = require('../js/Store')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')

xdescribe('<Search /> component', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render all the shows in the data', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should apply search filter correctly', () => {
    const wrapper = mount(<Search />)
    wrapper.find('.search-input').node.value = 'house'
    wrapper.find('.search-input').simulate('change')
    expect(wrapper.find('.show-card').length).to.equal(2)
    expect(wrapper.state('searchTerm')).to.equal('house')
  })
})

describe('<Store /> component', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})
    expect(state).to.deep.equal({'searchTerm': '', 'shows': shows})
  })

  it('should handle setSearchTerm correctly', () => {
    const state = rootReducer(undefined, {type: 'setSearchTerm', value: 'correct'})
    expect(state).to.deep.equal({'searchTerm': 'correct', 'shows': shows})
  })
})
