
import React from 'react'
import ProductHeader from '../../components/Molecules/ProductHeader'
import NavLink from '../../components/Organisms/layouts/NavLink'

type Props = {}

function FoodPage({}: Props) {
  return (
   <>
     <ProductHeader 
     title={'Our Products'} 
     description={'Our products are packed with real, great-tasting ingredients and are always free from high fructose corn syrup and all the other artificial junk.'} 
     image={'images/FishAmok.webp'}
     noneImg={'images/food.png'}
     />
     <NavLink/>
   </>
  )
}

export default FoodPage