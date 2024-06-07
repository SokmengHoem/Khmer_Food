import React from "react"
import FoodItem from "../../components/Molecules/foodDetail/FoodDetail";
import { PageRelateFood } from "../../components/Molecules/foodDetail/FoodRelate";
const FoodDetail: React.FC = () =>{
    return  (
        <div>
            <FoodItem/>
            <PageRelateFood/>
        </div>
    );
}

export default FoodDetail;