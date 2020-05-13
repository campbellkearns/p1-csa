import React, { Fragment } from 'react'

const Basket = ({  name, price, items }) => {
  return (
    <Fragment>
      <h4>{ name }</h4>
      <ul>
        {
          items.map(item => <li>{ item.name }</li>)
        }
      </ul>
      <span>{ price }</span>
    </Fragment>
  )
}

export default Basket