import React from "react";
import img from '../../../public/images/relate_product1.png';

const SimpleTastesBetter: React.FC = () => {
    return (
        <div className="flex items-center justify-between bg-[#FBF9F4] p-8">
            <div className="max-w-md">
                <h2 className="text-3xl font-bold text-black ml-8">
                    Simple Tastes Better
                    <div className="w-16 h-10 bg-orange-500 absolute left-0 bottom-0 transform translate-y-2"></div>
                </h2>
                <p className="mt-4 ml-8 text-lg text-black">
                    We exist because we believe that grilling with family and friends is one of life’s simple pleasures and that the products we use to grill should be simple too.
                </p>
            </div>
            <div className="mr-8">
                <img
                    src={img}
                    alt="Delicious food"
                    className="rounded-lg shadow-2xl shadow-gray-600"
                />
            </div>
        </div>
    );
};

export default SimpleTastesBetter;