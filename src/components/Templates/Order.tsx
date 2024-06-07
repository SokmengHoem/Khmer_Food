


import React from 'react';
import Marquee from './Marquee'; // Adjust the import path as necessary

const OrderSection: React.FC = () => {
  return (
    <div className="w-full  py-8 px-4 rounded-xl flex flex-col items-center gap-5 mt-5" style={{ backgroundColor: "rgba(255, 99, 71, 0.4) "}}>
      <h1 className="text-4xl text-white font-bold">How You Can Order</h1>
      <Marquee>
        <div className="flex items-center gap-16">
          <div className="w-56 h-56">
            <img src="images/foodPage/panda.png" className="w-full h-full object-contain" alt="Panda" />
          </div>
          <div className="w-40 h-40">
            <img src="images/foodPage/ali.png" className="w-full h-full object-contain" alt="Ali" />
          </div>
          <div className="w-40 h-40">
            <img src="images/foodPage/wing.png" className="w-full h-full object-contain" alt="Wing" />
          </div>
          <div className="w-44 h-44">
            <img src="images/foodPage/grab.png" className="w-full h-full object-contain" alt="Grab" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default OrderSection;
