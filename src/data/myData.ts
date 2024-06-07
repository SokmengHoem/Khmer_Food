import { FaCircleCheck } from "react-icons/fa6";
import { TitleWithIconProps } from "../components/Molecules/TitleWithIcon";
import { IoIosCloseCircle } from "react-icons/io";
import { FoodItemType } from "../components/Organisms/card/CartFood";

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



export const foods: FoodItemType[] = [
  {
    id: 1,
    image: "images/foodPage/num.png",
    name: "Num Ornsorm Jrurk",
    size: 'S',
    price: 4.99,
    description: "Chicken lorem20",
    favourite: true,
  },
  {
    id: 2,
    image: "images/foodPage/num1.png",
    name: "Num Chak KrChan",
    size: "M",
    price: 5.00,
    description: "the best kh food",
    favourite: false,
  },
  {
    id: 3,
    image: "images/foodPage/num2.png",
    name: "Num Duk",
    size: "L",
    price: 0.50,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 4,
    image: "images/foodPage/kichen.png",
    name: "Turkey food",
    size: "M",
    price: 50.00,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 5,
    image: "images/foodPage/indian.png",
    name: "Brampton Indian",
    size: "M",
    price: 11.99,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 6,
    image: "images/foodPage/mean.png",
    name: "Turkey food",
    size: "s",
    price: 31.99,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 7,
    image: "images/foodPage/toboki.png",
    name: "Korean Bibimbap",
    size: "M",
    price: 10.99,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 8,
    image: "images/foodPage/japan.png",
    name: "Sashimi",
    size: "M",
    price: 100.00,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 9,
    image: "images/foodPage/cocanut.png",
    name: "Coconut",
    size: "M",
    price: 1.00,
    description: "One of the most famous popular variety of coconut is an aromatic coconut (fragrant coconut or Maphrao Num Hom). Aromatic coconut is an agricultural commodity that Thailand has the potential to produce and it has the trend for more exportation due to the global health trend and unique aromatic function, there is a great demand from overseas markets every year.",
    favourite: false,
  },
  {
    id: 10,
    image: "images/foodPage/tnot.png",
    name: "Tnaot",
    size: "M",
    price: 1.00,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 11,
    image: "images/foodPage/amok.png",
    name: "Rice with Amok ",
    size: "M",
    price: 5.00,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 11,
    image: "images/foodPage/cream.png",
    name: "Fruits in Cream",
    size: "M",
    price: 5.00,
    description: "Num Duk KrChan",
    favourite: false,
  },
];

export const foodsKh: FoodItemType[] = [
  {
    id: 1,
    image: "images/foodPage/mchol.png",
    name: "M’chur Krerng",
    size: 'S',
    price: 4.99,
    description: "Chicken lorem20",
    favourite: true,
  },
  {
    id: 2,
    image: "images/foodPage/k2.png",
    name: "Kaw Sach Chrouk",
    size: "M",
    price: 5.00,
    description: "the best kh food",
    favourite: false,
  },
  {
    id: 3,
    image: "images/foodPage/k3.png",
    name: "Khor Ko",
    size: "L",
    price: 0.50,
    description: "Num Duk KrChan",
    favourite: false,
  },
 
  {
    id: 4,
    image: "images/foodPage/amok.png",
    name: "Rice with Amok ",
    size: "M",
    price: 5.00,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 5,
    image: "images/foodPage/beef.png",
    name: "Prahok Sauce",
    size: "M",
    price: 5.00,
    description: "Nom Bank Chok",
    favourite: false,
  },
  {
    id: 6,
    image: "images/foodPage/numchok.png",
    name: " Nom Bank Chok",
    size: "M",
    price: 1.00,
    description: "Nom Bank Chok",
    favourite: false,
  },
  {
    id: 7,
    image: "images/foodPage/k1.jpg",
    name: " Terk Krerng and vegetable",
    size: "M",
    price: 10.00,
    description: "Nom Bank Chok",
    favourite: false,
  },
  
  {
    id: 8,
    image: "images/foodPage/Banh.jpg",
    name: "Banh Chev",
    size: "M",
    price: 2.50,
    description: "Nom Bank Chok",
    favourite: false,
  },
 
];

export const foodsNum: FoodItemType[] = [
  {
    id: 1,
    image: "images/foodPage/num.png",
    name: "Num Ornsorm Jrurk",
    size: 'S',
    price: 4.99,
    description: "Chicken lorem20",
    favourite: true,
  },
  {
    id: 2,
    image: "images/foodPage/num1.png",
    name: "Num Chak KrChan",
    size: "M",
    price: 5.00,
    description: "the best kh food",
    favourite: false,
  },
  {
    id: 3,
    image: "images/foodPage/num2.png",
    name: "Num Duk",
    size: "L",
    price: 0.50,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 4,
    image: "images/foodPage/numkh.png",
    name: "Dessert",
    size: "L",
    price: 100.0,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 5,
    image: "images/foodPage/kom.jpg",
    name: "Num Kom",
    size: "L",
    price: 100.0,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 6,
    image: "images/foodPage/k4.png",
    name: "Rice Cakes",
    size: "L",
    price: 100.0,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 7,
    image: "images/foodPage/ai.jpg",
    name: " Nom plae ai ",
    size: "L",
    price: 100.0,
    description: "Num Duk KrChan",
    favourite: false,
  },
  {
    id: 8,
    image: "images/foodPage/k1j.png",
    name: " Khmer Num Kroch",
    size: "L",
    price: 100.0,
    description: "Num Duk KrChan",
    favourite: false,
  },
];

