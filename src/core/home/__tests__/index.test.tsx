import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'
import { Text } from 'react-native'

import Home from '../index'

describe('Home', () => {
  it('renders without crashing', () => {
    const root = create(<Home />)

    expect(root.toJSON()).toMatchSnapshot()
  })

  it('renders a greeting', () => {
    const component = mount(<Home />)
    const greeting = component.find(Text)

    expect(greeting.text()).toEqual('Welcome to the future.')
  })
})
