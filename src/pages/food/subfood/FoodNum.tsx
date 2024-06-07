import ProductHeader from "../../../components/Molecules/ProductHeader"
import {  foodsNum } from "../../../data/myData"
import CartFood, { FoodItemType } from "../../../components/Organisms/card/CartFood"
import OrderSection from "../../../components/Templates/Order"
import NavLink from "../../../components/Organisms/layouts/NavLink";
import Button from "../../../components/atoms/Button";
import { useEffect, useState } from "react";


const FoodNum = () => {
  const [data, setData] = useState<FoodItemType[]>([])
  const [num, setNum] = useState<number>(0)

  const limit = () =>{
    const items =foodsNum.slice(num,4+num)
    setData([...data, ...items])
  }

   useEffect(() =>{
      limit();
   },[num])

   const handleClick = () => {
     setNum(num+4)
   }

  return (
    <>
    <ProductHeader
      title={"Our Products"}
      description={
        "Our products are packed with real, great-tasting ingredients and are always free from high fructose corn syrup and all the other artificial junk."
      }
      image={"images/foodPage/good.jpg"}
      noneImg={""}
    />
    <NavLink numKhmer={true} />
    <div className="w-[83%] h-auto mx-auto mb-10 grid sm:grid-cols-1 grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((food) => (
        <CartFood key={food.id} food={food} />
      ))}
    </div>
    <div className=" flex items-center justify-center">
      <Button variant="myWeb" onClick={handleClick}>See More</Button>
    </div>
    <OrderSection />
  </>
  )
}

export default FoodNum