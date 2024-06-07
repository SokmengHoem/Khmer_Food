import { FaHeart } from "react-icons/fa6";

export interface FoodItemType {
  id: number;
  image: string;
  name: string;
  size: string;
  price: number;
  description: string;
  favourite: boolean;
}

interface FoodItem{
  food: FoodItemType;
}

export default function CartFood({
  food
}: FoodItem) {
  return (
    <div  className="w-full bg-[#F9F9F9] hover:bg-[#eeeeee] py-4 px-4 rounded-xl flex flex-col items-center gap-3 mt-5">
   <div className="w-full h-40 rounded-xl cursor-pointer overflow-hidden">
  <img src={food.image} className="w-full h-full object-cover" alt="" />
</div>



      <h4 className=" w-64 text-center py-2 rounded-full bg-[#ffd9aa] font-semibold shadow-inner">
        {food.name}
      </h4>
      <h4 className=" w-64 text-center font-semibold py-2 rounded-full bg-[#FFD3F8] font shadow-inner">
        Size {food.size} <span className=" text-red-600">${food.price}</span> only
      </h4>
      <div className=" flex items-center gap-10">
        <button className=" px-3 py-1 hover:bg-green-400 cursor-pointer bg-green-500 text-white font-semibold rounded-xl">Buy</button>
          <FaHeart size={34} className={`${food.favourite? "text-red-600":"text-white"} cursor-pointer bg-[#ffd9aa] px-1 rounded-xl`}/>
      </div> 
    </div>
  );
}
