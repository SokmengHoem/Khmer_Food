import ProductHeader from "../../components/Molecules/ProductHeader";
import CartFood from "../../components/Organisms/card/CartFood";
import NavLink from "../../components/Organisms/layouts/NavLink";
import Order from "../../components/Templates/Order";
import { foods } from "../../data/myData";

function FoodPage() {
  return (
    <>
      <ProductHeader
        title={"Our Products"}
        description={
          "Our products are packed with real, great-tasting ingredients and are always free from high fructose corn syrup and all the other artificial junk."
        }
        image={"images/FishAmok.webp"}
        noneImg={"images/food.png"}
      />
      <NavLink showAll={true} khmerFood={false} />
      <div className="w-[83%] h-auto mx-auto mb-10 grid sm:grid-cols-1 grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {foods.map((food) => (
          <CartFood key={food.id} food={food} />
        ))}
      </div>
      <Order />
    </>
  );
}

export default FoodPage;
