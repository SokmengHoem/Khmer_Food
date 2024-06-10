import { FaHeart } from "react-icons/fa6";
import { useFood } from "../../context/FoodContext";

export default function FavoritePage() {
  const { addToFav, removeFoodFav } = useFood();
  return (
    <div className=" w-[80%] h-auto mx-auto py-10 flex flex-col items-center gap-6">
      <div className=" text-4xl text-pink-600 font-bold text-center">
        Your Favorite
      </div>
      <div className=" w-full h-auto flex flex-col gap-5">
        {
          addToFav.length === 0 ? <div className=" text-center text-2xl px-10 py-2 rounded-xl bg-red-100 ">Your favorite is Empty</div> :addToFav.map((item) => (
            <div
              key={item.id}
              className=" h-32 flex justify-between shadow-inner bg-slate-100 rounded-xl overflow-hidden"
            >
              <div className=" w-[13%] h-full">
                <img
                  src={item.image}
                  className=" w-full h-full"
                  alt=""
                />
              </div>
              <div className=" w-[80%] flex flex-col justify-center items-center">
                <h1 className=" text-xl font-bold">{item.name}</h1>
                <p className=" font-medium">
                  Size <span className=" font-bold">{item.size}</span>
                </p>
                <span className=" text-red-600 font-bold">${item.price}</span>
              </div>
              <div className=" w-[7%] flex justify-end">
                <FaHeart onClick={() => removeFoodFav(item)} size={24} className={`${
            addToFav ? "text-red-600" : "text-white"
          } cursor-pointer m-5`} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
