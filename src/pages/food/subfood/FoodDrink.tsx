
import ProductHeader from "../../../components/Molecules/ProductHeader"
import CartFood, { FoodItemType } from "../../../components/Organisms/card/CartFood"
import OrderSection from "../../../components/Templates/Order"
import NavLink from "../../../components/Organisms/layouts/NavLink";
import Button from "../../../components/atoms/Button";
import React, { useEffect, useState } from "react";

interface FoodDrinkProp{
  drinks: FoodItemType[],
}


const FoodDrink:React.FC<FoodDrinkProp> = ({ drinks}) => {
  const [data, setData] = useState<FoodItemType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [num, setNum] = useState<number>(0);

  const handleFilter = () => {
    let filtered = drinks;
    if (searchTerm !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  };

  useEffect(() => {
    setData([]); // Reset data when searchTerm changes
    setNum(0); // Reset num to start from the beginning
  }, [searchTerm]);

  useEffect(() => {
    const newData = handleFilter();
    const items = newData.slice(num, num + 4);
    setData((prevData) => [...prevData, ...items]);
  }, [num, searchTerm]);

  const handleClick = () => {
    setNum((prevNum) => prevNum + 4);
  };

  return (
    <>
      <ProductHeader
        title={"Our Products"}
        description={
          "Our products are packed with real, great-tasting ingredients and are always free from high fructose corn syrup and all the other artificial junk."
        }
        image={"images/foodPage/i.jpg"}
        noneImg={"images/foodPage/p.jpg"}
      />
      <NavLink drink={true} handleSearch={setSearchTerm} />
      <div className="w-[83%] h-auto mx-auto mb-10 grid sm:grid-cols-1 grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((food) => (
          <CartFood key={food.id} food={food}/>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button variant="myWeb" onClick={handleClick}>
          See More
        </Button>
      </div>
      <OrderSection />
    </>
  );
};

export default FoodDrink;