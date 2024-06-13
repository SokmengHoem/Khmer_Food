import { useEffect, useState } from "react";
import ProductHeader from "../../components/Molecules/ProductHeader";
import CartFood, { FoodItemType } from "../../components/Organisms/card/CartFood";
import NavLink from "../../components/Organisms/layouts/NavLink";
import OrderSection from "../../components/Templates/Order";
import Button from "../../components/atoms/Button";
import { useFood } from "../../context/FoodContext";


const FoodPage = () => {
  const {foodD} = useFood();
  const [data, setData] = useState<FoodItemType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [num, setNum] = useState<number>(0);

  const handleFilter = () => {
    let filtered = foodD;
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

  const filteredData = handleFilter();

  return (
    <>
    
      <ProductHeader
        title={"Our Products"}
        description={
          "Our products are packed with real, great-tasting ingredients and are always free from high fructose corn syrup and all the other artificial junk."
        }
        image={"images/foodPage/ka.png"}
        noneImg={"images/foodPage/cocanut.png"}
      />
      <NavLink showAll={true} handleSearch={setSearchTerm} />
      <div className="w-[83%] h-auto mx-auto mb-10 grid sm:grid-cols-1 grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.length === 0 && searchTerm !== "" ? (
          <div className="col-span-4 text-center text-red-600">No products found</div>
        ) : (
          data.map((food) => <CartFood key={food.id} food={food} />)
        )}
      </div>
      {filteredData.length > data.length && (
        <div className="flex items-center justify-center">
          <Button variant="myWeb" onClick={handleClick}>
            See More
          </Button>
        </div>
      )}
      <OrderSection />
    </>
  );
};

export default FoodPage;