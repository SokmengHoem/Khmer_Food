import FoodItem from "../../components/Molecules/foodDetail/FoodItem";
import { PageRelateFood } from "../../components/Molecules/foodDetail/FoodRelate";
import { useFood } from "../../context/FoodContext";

export default function FoodDetail() {

  return (
    <div>
      <FoodItem />
      <PageRelateFood />
    </div>
  );
}
