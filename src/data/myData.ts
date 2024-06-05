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
