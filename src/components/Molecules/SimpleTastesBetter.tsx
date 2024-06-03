import React from "react";
import img from '../../../public/images/relate_product1.png';

const SimpleTastesBetter: React.FC = () => {
    return (
        <div className="flex ">
            <div className="max-w-md">
                <h1>This div for text</h1>
            </div>
            <div className="ml-8">
                <h1>This div for image</h1>
                <img
                    src={img}
                    alt="Delicious food"
                    className="rounded-3xl pb-5"
                />
            </div>
        </div>
    );
};

export default SimpleTastesBetter;