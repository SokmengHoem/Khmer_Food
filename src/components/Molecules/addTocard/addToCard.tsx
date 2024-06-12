import * as React from 'react'
import { useState,useEffect } from 'react';
import { useFood } from '../../../context/FoodContext';
import { FoodItemType } from '../../Organisms/card/CartFood';

const Cart: React.FC = () => {
    const { addToCart, removeFoodCart } = useFood();
    // declare new state
    const [count, setCount] = useState<{ [key: string]: number }>({});
    const [subtotal, setSubtotal] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        // Calculate subtotal
        let newSubtotal = 0;
        for (const item of addToCart) {
            newSubtotal += (item.price * (count[item.id.toString()] || 0));
        }
        setSubtotal(newSubtotal);

        // Calculate total
        setTotal(newSubtotal);
    }, [count, addToCart]);

    const increaseCount = (itemId: string) => {
        setCount(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 1) + 1
        }));
    };

    const decreaseCount = (itemId: string) => {
        setCount(prevCounts => ({
            ...prevCounts,
            [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4 mb-8 rounded  shadow-black-100">
            <h1 className="text-3xl font-bold text-center text-red-700 mb-8">Your Card</h1>
            <div className="space-y-4">
                {addToCart.map((item: FoodItemType) => (
                    <div key={item.id} className="grid grid-cols-4 gap-4 shadow-md bg-gray-100 rounded-2xl">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-36 h-36 rounded-2xl object-cover p-0"
                        />
                        <div className="grid mt-10 mb-6">
                            <div className="justify-center items-center">
                                <h2 className="text-xl font-semibold text-center">{item.name}</h2>
                                <p className="text-lg text-center">{"Size : " + item.size}, <span className="text-red-500 text-lg text-center">{"$ " + item.price} only</span></p>
                            </div>
                        </div>
                        <div className="grid mt-10 mb-6">
                            <div className="grid grid-cols-3 bg-red-700 text-white rounded-2xl w-36 h-12 shadow-md shadow-gray-500 text-xl">
                                <button className="px-3 py-1 font-bold" onClick={() => decreaseCount(item.id.toString())}>-</button>
                                <div className="px-4 py-2 font-bold items-center justify-center">{count[item.id.toString()] || 1}</div>
                                <button className="px-5 py-1 font-bold items-end" onClick={() => increaseCount(item.id.toString())}>+</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-0 bg-white rounded-2xl ml-28">
                            <button onClick={() => removeFoodCart(item)} className="items-center justify-centers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 w-6 h-6 text-green-500 hover:text-green-600 font-bold duration-150 hover:scale-110" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <hr className='pt-4' />
            <div className="flex">
                <div className='grid grid-cols-3 gap-3'>
                    <input
                        placeholder='Category food'
                        className='rounded-2xl border p-2 items-center h-fit'
                    />
                    <button className='rounded-2xl bg-red-500 hover:bg-red-600 text-white h-fit p-2'>Apply Category</button>
                    <div className='rounded-lg shadow-md shadow-orange-300 bg-red-100 p-3'>
                        <h1 className='font-bold pb-2'>Card Total</h1>
                        <hr className='border-gray-600' />
                        <div className='flex justify-between p-2'>
                            <h1>Subtotal</h1>
                            <h1>{"$" + subtotal.toFixed(2)}</h1>
                        </div>
                        <hr className='border-gray-600' />
                        <div className='flex justify-between p-2 pb-0'>
                            <h1>Total</h1>
                            <h1>{"$" + total.toFixed(2)}</h1>
                        </div>
                        <button className='rounded-2xl bg-red-500 hover:bg-red-600 text-white h-fit p-2'>Buy Nows</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
