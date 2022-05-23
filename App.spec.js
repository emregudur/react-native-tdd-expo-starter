import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  it('renders a barcode', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.findWhere(w => w.text() === 'Hello, React Native!')).toExist()
  })
})
