
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useFood } from "../../../context/FoodContext";
import { useAuth } from "../../../context/AuthContext";

export interface FoodItemType {
  id: number;
  image: string;
  name: string;
  size: string;
  price: number;
  description: string;
  favourite: boolean;
  rating: string;
}

interface FoodItem {
  food: FoodItemType;
}

export default function CartFood({ food }: FoodItem) {
  const navigate = useNavigate();
  const { addFoodCart, addFoodFav, handleViewFood } = useFood();
  const { isAuthenticated } = useAuth();

  const handleClick = (food: any) => {
    handleViewFood(food);
    navigate(`/food/${food.id}`);
  };

  const handleAddToCart = (food: any) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addFoodCart(food);
  };

  const handleAddToFavorite = (food: any) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addFoodFav(food);
  };

  return (
    <div className="w-full bg-[#F9F9F9] hover:bg-[#eeeeee] py-4 px-4 rounded-xl flex flex-col items-center gap-3 mt-5">
      <div className="w-full h-44 rounded-xl cursor-pointer overflow-hidden">
        <img src={food.image} className="w-full h-full" alt="" />
      </div>

      <h4 className="w-64 text-center py-2 rounded-full bg-[#ffd9aa] font-semibold shadow-inner">
        {food.name}
      </h4>
      <h4 className="w-64 text-center font-semibold py-2 rounded-full bg-[#FFD3F8] font shadow-inner">
        Size {food.size} <span className="text-red-600">${food.price}</span> only
      </h4>
      <div className="flex items-center gap-10">
        <button onClick={() => handleAddToCart(food)} className="px-3 py-1 hover:bg-green-400 cursor-pointer bg-green-500 text-white font-semibold rounded-xl">
          Buy
        </button>
        <button onClick={() => handleClick(food)} className="px-3 py-1 hover:bg-blue-400 cursor-pointer bg-blue-500 text-white font-semibold rounded-xl">
          View
        </button>
        <FaHeart
          onClick={() => handleAddToFavorite(food)}
          size={34}
          className="text-red-600"
        />
      </div>
    </div>
  );
}
