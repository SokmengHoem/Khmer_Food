import React from 'react';

const features = [
    {
        imgSrc: '/images/aboutPage/icon1.png', // Make sure this path is correct
        text: 'No High Fructose Corn Syrup',
    },
    {
        imgSrc: '/images/aboutPage/icon2.png', // Provide the correct image path
        text: 'No Artificial Flavors, Colors or Preservatives',
    },
    {
        imgSrc: '/images/aboutPage/icon3.png', // Provide the correct image path
        text: 'Gluten Free',
    },
    {
        imgSrc: '/images/aboutPage/icon4.png', // Provide the correct image path
        text: 'Non GMO',
    },
];

const OnlyTheGoodStuff: React.FC = () => {
    return (
        <div className="text-center py-12 bg-white">
            <h2 className="text-3xl font-bold mb-10">Only The Good Stuff</h2>

            <div className="grid grid-cols-4 gap-4 ml-40 mr-40 pb-14">
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <img src="/images/aboutPage/icon1.png" className="w-20 h-20" alt="Icon 1" />
                    <div className="text-center font-bold p-2">No High Fructose Corn Syrup</div>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <img src="/images/aboutPage/icon2.png" className="w-20 h-20" alt="Icon 1" />
                    <div className="text-center font-bold p-2">No Artificial Flavors, <br/> Colors or Preservatives</div>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <img src="/images/aboutPage/icon3.png" className="w-20 h-20" alt="Icon 1" />
                    <div className="text-center font-bold p-2">Gluten Free</div>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <img src="/images/aboutPage/icon4.png" className="w-20 h-20" alt="Icon 1" />
                    <div className="text-center font-bold p-2">Non GMO</div>
                </div>
            </div>


            <h3 className="text-2xl font-bold text-gray-900">SIMPLE INGREDIENTS. NO JUNK.®</h3>
        </div>
    );
};

export default OnlyTheGoodStuff;