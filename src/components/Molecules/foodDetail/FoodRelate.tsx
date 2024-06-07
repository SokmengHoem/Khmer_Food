import React from "react";
import {FoodProduct} from '../../../data/myData'
export const PageRelateFood: React.FC = () => {
    return (
        <div className="py-8 px-4 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">Relate Food Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:ml-40 md:mr-40 gap-3">
                {
                    FoodProduct.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-2xl shadow-gray-600 overflow-hidden justify-center flex">
                            <img
                                src={product.imgFood}
                                alt={product.title}
                                className="w-auto h-48 m-10 rounded-md duration-100 ease-in-out hover:scale-110 hover:rotate-6 cursor-pointer"
                            />
                        </div>
                    ))
                }

            </div>
            <div className="justify-center flex mt-8">
                <button
                    className="rounded-full bg-blue-600 duration-75 hover:bg-blue-800 hover:font-bold text-white px-9 py-3"
                >
                    Show More
                </button>
            </div>
        </div>
    );
}



