import React from "react";


interface FoodItemProps {
    name: string,
    priceRange: string,
    description: string,
    imageUrl: string,
    rating: string
}

export const FoodItem: React.FC<FoodItemProps> = ({ name, priceRange, description, imageUrl, rating }) => {
    return (
        <div><h1>{name}</h1></div>

    );
}
