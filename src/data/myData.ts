import { FaCircleCheck } from "react-icons/fa6";
import { TitleWithIconProps } from "../components/Molecules/TitleWithIcon";
import { IoIosCloseCircle } from "react-icons/io";

export interface RealWorldType {
  id: number;
  img: string;
  text: string;
  author: string;
}

export const compareA: TitleWithIconProps[] = [
  { title: "SIMPLE INGREDIENTS. NO JUNK.®", icon: FaCircleCheck, iconColor: "#77a240", iconPosition: "right" },
  { title: "No High Fructose Corn Syrup", icon: FaCircleCheck, iconColor: "#77a240", iconPosition: "right" },
  { title: "No Artificial Flavors", icon: FaCircleCheck, iconColor: "#77a240", iconPosition: "right" },
  { title: "No Artificial Colors", icon: FaCircleCheck, iconColor: "#77a240", iconPosition: "right" },
  { title: "No Artificial Preservatives", icon: FaCircleCheck, iconColor: "#77a240", iconPosition: "right" },
  { title: "Non-GMO Certified", icon: FaCircleCheck, iconColor: "#77a240", iconPosition: "right" },
]

export const compareB: TitleWithIconProps[] = [
  { title: "Highly Processed Ingredients", icon: IoIosCloseCircle, iconColor: "#920E07", iconPosition: "left" },
  { title: "#1 Ingredient is High Fructose Corn Syrup", icon: IoIosCloseCircle, iconColor: "#920E07", iconPosition: "left" },
  { title: "Artificial Flavors", icon: IoIosCloseCircle, iconColor: "#920E07", iconPosition: "left" },
  { title: "Artificial Colors", icon: IoIosCloseCircle, iconColor: "#920E07", iconPosition: "left" },
  { title: "Artificial Preservatives", icon: IoIosCloseCircle, iconColor: "#920E07", iconPosition: "left" },
  { title: "Not Non-GMO Certified", icon: IoIosCloseCircle, iconColor: "#920E07", iconPosition: "left" },
] 

export const reviews: RealWorldType[] = [
  {
    id: 1,
    img: "images/homeImg10.svg",
    text: "Hands down the best store-bought sauce.",
    author: "— Matt C."
  },
  {
    id: 2,
    img: "images/homeImg10.svg",
    text: "I love this sauce! It goes with everything.",
    author: "— Sarah D."
  },
  {
    id: 3,
    img: "images/homeImg10.svg",
    text: "My family can't get enough of it.",
    author: "— John K."
  },
  {
    id: 4,
    img: "images/homeImg10.svg",
    text: "Great taste and perfect for any meal.",
    author: "— Anna M."
  },
  {
    id: 5,
    img: "images/homeImg10.svg",
    text: "This sauce is a game-changer.",
    author: "— Lisa P."
  },
  {
    id: 6,
    img: "images/homeImg10.svg",
    text: "Highly recommend to everyone.",
    author: "— Mark T."
  },
  {
    id: 7,
    img: "images/homeImg10.svg",
    text: "Delicious and versatile.",
    author: "— Emma R."
  },
  {
    id: 8,
    img: "images/homeImg10.svg",
    text: "Perfect for any occasion.",
    author: "— Lucas H."
  },
  {
    id: 9,
    img: "images/homeImg10.svg",
    text: "A must-have in every kitchen.",
    author: "— Mia W."
  },
];


export interface FoodDetail {
  name: string;
  priceRange: string;
  description: string;
  imageUrl: string;
  rating: string;
}
export const foodDetail: FoodDetail = {
  name: 'Prahok Tis',
  priceRange: '$25.00 - $100.00',
  description: 'Prahok used in Khmer cuisine as a spice or spice. It originated from fish during the month when there was no fresh fish to supply.',
  imageUrl: 'public/images/aboutPage/relate_product1.png', 
  rating: '★ ★ ★ ★ ★'
};



interface foodProduct {
  id: number,
  imgFood: string,
  title: string
}

export const FoodProduct: foodProduct[] = [
  {
      id: 1,
      imgFood: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068213/Traditional-Cambodian-Dishes-To-Eat-Lok-Lak/Traditional-Cambodian-Dishes-To-Eat-Lok-Lak.jpg",
      title: "Product001"
  }, {
      id: 2,
      imgFood: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068193/Traditional-Cambodian-Dishes-To-Eat-Hot-Pot/Traditional-Cambodian-Dishes-To-Eat-Hot-Pot.jpg",
      title: "Product001"
  }, {
      id: 3,
      imgFood: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068189/Traditional-Cambodian-Dishes-To-Eat-Chicken-Curry/Traditional-Cambodian-Dishes-To-Eat-Chicken-Curry.jpg",
      title: "Product001"
  }, {
      id: 4,
      imgFood: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068198/Traditional-Cambodian-Dishes-To-Eat-Kampot-Pepper-Crab/Traditional-Cambodian-Dishes-To-Eat-Kampot-Pepper-Crab.jpg",
      title: "Product001"
  }, {
      id: 5,
      imgFood: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068225/Traditional-Cambodian-Dishes-To-Eat-Samlar-Machu/Traditional-Cambodian-Dishes-To-Eat-Samlar-Machu.jpg",
      title: "Product001"
  }, {
      id: 6,
      imgFood: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068207/Traditional-Cambodian-Dishes-To-Eat-Kuy-Teav/Traditional-Cambodian-Dishes-To-Eat-Kuy-Teav.jpg",
      title: "Product001"
  }, {
      id: 7,
      imgFood: "https://imgs.search.brave.com/vFTr2kpKXnHajAqIiD-FZSO22osjZHdHLzlDrU_k_bo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzU3NS9mb29k/LTE0ODkwNDYuanBn/P2ZtdA",
      title: "Product001"
  }, {
      id: 8,
      imgFood: "https://imgs.search.brave.com/vFTr2kpKXnHajAqIiD-FZSO22osjZHdHLzlDrU_k_bo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzU3NS9mb29k/LTE0ODkwNDYuanBn/P2ZtdA",
      title: "Product001"
  }, {
      id: 9,
      imgFood: "https://imgs.search.brave.com/8Zi75n_fook1RXcfvZAa1uIHP54uTLW8ZpaJI1w6QwA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWxkdWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDkvY2FtYm9kaWEt/Zm9vZC1hbW9rXzAu/anBn",
      title: "Product001"
  }
];

interface addTocard {
  id:number,
  img:string,
  title:string,
  size:string,
  price:string
}

export const AddToCard:addTocard[] = [
  {
    id:1,
    img:"https://3.bp.blogspot.com/-hGpLdFaP_Ds/XfDAtlM-UWI/AAAAAAAAGRg/LFctb_b4BhcITJB8hmklhcJ-yhHdKTsxgCLcBGAsYHQ/s1600/a8.jpg",
    title:"Prahok Khtis",
    size:"S",
    price:"22.33"
  },
  {
    id:2,
    img:"https://1.bp.blogspot.com/-6e1PVRmq69E/XfDAkQH8y-I/AAAAAAAAGP0/WjyguwBOpVg-ErcIX2-s-pBJJ-ClKNqQACLcBGAsYHQ/s1600/a10.jpg",
    title:"kari sa rea mean",
    size:"M", 
    price:"44.11"
  }
];