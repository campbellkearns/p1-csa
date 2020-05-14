import React from 'react';
import App from './App';
import Basket from './Basket'

import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders Basket components', () => {
    // SEAT
    // setup
    const appWrapper = shallow(<App />)
    // execute
    const basketComponents = appWrapper.find(Basket)
    // assert
    expect(basketComponents).toHaveLength(3)
    // (teardown)
  })

  it('renders a message if there are no baskets in the state', () => {
    // SEAT
    // setup
    const appWrapper = shallow(<App />)
    // modify the state of the App component instance to an empty baskets array in state
    appWrapper.setState({ baskets: [] })
    appWrapper.update()
    // execute
    const basketComponents = appWrapper.find(Basket)
    // assert
    expect(basketComponents).toHaveLength(0)
    expect(appWrapper.text()).toContain("We do not have any baskets to offer at this time.")
    // (teardown)
  })

  it('displays the message', () => {
    // SEAT
    // setup
    const appWrapper = shallow(<App />)
    // execute
    const basketComponents = appWrapper.find(Basket)
    // assert
    expect(appWrapper.text()).toContain("Please choose a basket")
    // (teardown)
  })
})
