
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function FoodPage({}: Props) {
  return (
   <>
     <div>FoodPage</div>
     <Link to="/food-details">See detail</Link>
   </>
  )
}

export default FoodPage