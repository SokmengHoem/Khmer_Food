import { FaCircleCheck } from "react-icons/fa6";
import { TitleWithIconProps } from "../components/Molecules/TitleWithIcon";
import { IoIosCloseCircle } from "react-icons/io";

 export  const compareA:TitleWithIconProps[] = [
    {title:"SIMPLE INGREDIENTS. NO JUNK.®", icon: FaCircleCheck, iconColor: "#77a240",iconPosition: "right" },
    {title:"No High Fructose Corn Syrup", icon: FaCircleCheck, iconColor: "#77a240",iconPosition: "right" },
    {title:"No Artificial Flavors", icon: FaCircleCheck, iconColor: "#77a240",iconPosition: "right" },
    {title:"No Artificial Colors", icon: FaCircleCheck, iconColor: "#77a240",iconPosition: "right" },
    {title:"No Artificial Preservatives", icon: FaCircleCheck, iconColor: "#77a240",iconPosition: "right" },
    {title:"Non-GMO Certified", icon: FaCircleCheck, iconColor: "#77a240",iconPosition: "right" },
 ]

 export  const compareB:TitleWithIconProps[] = [
    {title:"Highly Processed Ingredients", icon: IoIosCloseCircle, iconColor: "#920E07",iconPosition: "left" },
    {title:"#1 Ingredient is High Fructose Corn Syrup", icon: IoIosCloseCircle, iconColor: "#920E07",iconPosition: "left" },
    {title:"Artificial Flavors", icon: IoIosCloseCircle, iconColor: "#920E07",iconPosition: "left" },
    {title:"Artificial Colors", icon: IoIosCloseCircle, iconColor: "#920E07",iconPosition: "left" },
    {title:"Artificial Preservatives", icon: IoIosCloseCircle, iconColor: "#920E07",iconPosition: "left" },
    {title:"Not Non-GMO Certified", icon: IoIosCloseCircle, iconColor: "#920E07",iconPosition: "left" },
 ]
