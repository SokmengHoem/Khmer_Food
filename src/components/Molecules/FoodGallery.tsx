import React, { useState } from "react";

export const FoodGallery: React.FC = () => {
    /*
     * Create new state for event see more post 
    */
    const [images, setImages] = useState<string[]>([]);
    const handleSeeMorePost = () => {
        setImages([
            "images/relate_product1.png",
            "images/relate_product2.png",
            "images/relate_product3.png",
            "images/relate_product4.png",
        ]);
    };


    return (
        <div className="bg-[#f9f4ea]  flex flex-col items-center py-10">
            <h2 className="text-2xl font-bold text-center mb-4">Let's Go Socail!</h2>
            <div className="bg-red-600 h-1 w-16 mx-auto mb-8" />
            <div className="flex justify-center space-x-4 mb-8">
                <img
                    src="images/relate_product4.png"
                    alt="Food 2"
                    className="w-45 h-45 object-cover rounded-lg shadow-2xl shadow-gray-600"
                />
                <img
                    src="images/relate_product3.png"
                    alt="Food 2"
                    className="w-45 h-45 object-cover rounded-lg shadow-2xl shadow-gray-600"
                />
                <img
                    src="images/relate_product2.png"
                    alt="Food 2"
                    className="w-45 h-45 object-cover rounded-lg shadow-2xl shadow-gray-600"
                />
                <img
                    src="images/relate_product1.png"
                    alt="Food 2"
                    className="w-45 h-45 object-cover rounded-lg shadow-2xl shadow-gray-600"
                />
            </div>
            <div className="flex justify-center space-x-4 mb-8">

                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Food ${index + 1}`}
                        className="w-45 h-45 object-cover rounded-lg shadow-2xl shadow-gray-600"
                    />
                ))}
            </div>
            <button className="bg-red-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-none hover:text-black transition duration-300" onClick={handleSeeMorePost}>See More Post</button>
        </div>
    );
}
