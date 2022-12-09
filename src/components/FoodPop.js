import React from 'react'
import '../components/styles/FoodPop.css'

function FoodPop({ id, name,price, food_url, review, description}) {
  return (
    <div>
<div className="singleFood" key={id}>
      <img className="food_img" alt="Foodie" src={food_url} />
      <p className="food_name">{name}</p>
      <p className="price">{price}</p>
      <p className="review">{review}</p>
      <p className="description">{description}</p>
    </div>
    </div>
  )
}

export default FoodPop