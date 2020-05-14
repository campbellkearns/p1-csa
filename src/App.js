import React, { Component } from 'react';
import './App.css';

import Basket from './Basket'


class App extends Component {
  state = {
    baskets: [
      {
        name: "green",
        price: 18.50,
        items: [{name: 'kiwi'}, {name: 'apple'}, {name: 'banana'}]
      },
      {
        name: "antioxidant",
        price: 28.00,
        items: [{name: 'strawberries'}, {name: 'chaga mushrooms'}, {name: 'turmeric'}]
      },
      {
        name: "veggies",
        price: 22.50,
        items: [{name: 'kale'}, {name: 'chard'}, {name: 'bok choy'}]
      },
    ]
  }

  increasePriceByOne = (basketName) => {
    const untouchedBaskets = this.state.baskets.filter(basket => basket.name !== basketName)
    const newlyPricedBasket = this.state.baskets.filter(basket => basket.name === basketName)
    newlyPricedBasket[0].price++
    const updatedBaskets =  [...untouchedBaskets, ...newlyPricedBasket]
    this.setState({ baskets: updatedBaskets })
  }

  deleteBasket = (basketName) => {
    const updatedBaskets = this.state.baskets.filter(basket => basket.name !== basketName)
    this.setState({ baskets: updatedBaskets })
  }

  render() {

    return (
      <div className="App">
        <h2>Welcome to the P1 CSA [digital]</h2>
        <p>Please choose a basket</p>
        <section>
          {
            this.state.baskets.length > 0 ?
            this.state.baskets.map((basket, index) => <Basket
              key={index} 
              name={basket.name} 
              price={basket.price} 
              items={basket.items}
              removeBasket={this.deleteBasket}
              increasePrice={this.increasePriceByOne} 
              />
            )
            :
            <p>We do not have any baskets to offer at this time.</p>
          }
        </section>
      </div>
    );
  }
}

export default App;