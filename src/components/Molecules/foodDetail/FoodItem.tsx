import React, { useState } from 'react';
interface FoodItemProps {
    name: string;
    priceRange: string;
    description: string;
    imageUrl: string;
    rating: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ name, priceRange, description, imageUrl, rating }) => {
    const [number, setNumber] = useState(0)
    const [click, setClick] = useState(false)
    const onClicked = () => {
        setClick(!click);
    }
    // for Increment
    const Increment = () => {
        if (number! < 10) {
            setNumber(number + 1)
        }
    }
    // for Decrement
    const decrement = () => {
        if (number! > 0) {
            setNumber(number - 1)
        }
    }
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex items-center space-x-60">
            <div className="ml-12 bg-gray-300 w-96 h-80 rounded-2xl flex items-center justify-center duration-300 ease-in-out hover:bg-slate-700">
                <img
                    src={imageUrl}
                    alt="Food"
                    className="w-64 h-64 rounded-2xl shadow-2xl shadow-gray-600 object-cover items-center duration-300 ease-in-out hover:scale-110 hover:rotate-3"
                />
            </div>
            <div>
                <h2 className="text-4xl font-bold">{name}</h2>
                <p className="text-2xl text-orange-600 mt-2">{priceRange}</p>
                <p className="text-gray-700 mt-2 text-2xl">
                    {description}
                </p>
                <div className="flex items-center mt-4">
                    <span className="text-yellow-400 text-2xl">
                        {rating}
                    </span>
                </div>
                <div className="flex items-center mt-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center" onClick={decrement}>-</button>
                    <span className="mx-4 text-2xl">{number}</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center" onClick={Increment}>+</button>
                </div>
                <div className="flex items-center mt-4">
                    <img
                        src={click ? 'images/foodDetail/icon_heart01.png' : 'images/foodDetail/icon_heart02.png'}
                        alt="Heart"
                        className="w-8 h-8 duration-75 ease-in-out hover:scale-110"
                        onClick={onClicked}
                    />
                    <span className="ml-2 text-gray-600 text-lg">add to white list</span>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;