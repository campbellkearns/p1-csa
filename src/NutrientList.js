import React from 'react'

const NutrientList = (props) => {
  return (
    <ul>
      {
        props.nutrients.map((nutrient, index) => <li key={index}>{nutrient.name}</li>)
      }
    </ul>
  )
}

export default NutrientList