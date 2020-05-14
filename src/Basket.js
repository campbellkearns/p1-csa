import React, { Fragment } from 'react'

const Basket = ({ name, price, items, removeBasket, increasePrice }) => {
  return (
    <Fragment>
      <h4>{ name }</h4>
      <ul>
        {
          items.map((item, index) => <li key={index}>{ item.name }</li>)
        }
      </ul>
      <p>{ price }</p>
      <button onClick={() => removeBasket(name)}>remove basket from CSA</button>
      <button onClick={() => increasePrice(name)}>increase price</button>
    </Fragment>
  )
}

export default Basket