import * as React from 'react';
import { FoodItemType } from '../components/Organisms/card/CartFood';
import { foods } from '../data/myData';

interface FoodContextType {
    viewFood:any,
    numFav: number,
    numCart: number,
    addToCart: FoodItemType[],
    addToFav: FoodItemType[],
    handleViewFood: (item:FoodItemType) => void,
    addFoodCart: (food: FoodItemType) => void,
    removeFoodCart: (food: FoodItemType) => void,
    addFoodFav: (food: FoodItemType) => void,
    removeFoodFav: (food: FoodItemType) => void,
}

export const FoodContext = React.createContext<FoodContextType | null>(null);

export const FoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [addToCart, setAddToCart] = React.useState<FoodItemType[]>([]);
    const [numCart, setNumCart] = React.useState<number>(0);
    const [addToFav, setAddToFav] = React.useState<FoodItemType[]>([]);
    const [numFav, setNumFav] = React.useState<number>(0); 
    const [foodD, setFoodD] = React.useState<FoodItemType[]>(foods);
    const [viewFood, setViewFood] = React.useState<FoodItemType>();

    const handleViewFood = (item:FoodItemType) => {
        setViewFood(item);
    }

    const addFoodCart = (food: FoodItemType) => {
        setAddToCart([...addToCart, food]);
        setNumCart(numCart + 1);
    };

    const removeFoodCart = (food: FoodItemType) => {
        setAddToCart(addToCart.filter(item => item.id !== food.id));
        setNumCart(numCart - 1);
    };

    const addFoodFav = (food: FoodItemType) => {
        if (!addToFav.some(item => item.id === food.id)) {
            setAddToFav([...addToFav, { ...food, favourite: true }]);
            setNumFav(numFav + 1);
        }
        setFoodD(foods.map(item => item.id === food.id ? { ...item, favourite: true } : item));
    };

   
    
    const removeFoodFav = (food: FoodItemType) => {
        setAddToFav(addToFav.filter(item => item.id !== food.id));
        setNumFav(numFav - 1);
    };
    
    return (
        <FoodContext.Provider value={{ viewFood, addToCart, numCart, numFav, addToFav, handleViewFood, addFoodCart, removeFoodCart, addFoodFav, removeFoodFav }}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = () => {
    const context = React.useContext(FoodContext);
    if (!context) {
        throw new Error("useFood must be used within a FoodProvider");
    }
    return context;
};


