import React from 'react';

const features = [
    {
        imgSrc: '/images/icon1.png', // Make sure this path is correct
        text: 'No High Fructose Corn Syrup',
    },
    {
        imgSrc: '/images/icon2.png', // Provide the correct image path
        text: 'No Artificial Flavors, Colors or Preservatives',
    },
    {
        imgSrc: '/images/icon3.png', // Provide the correct image path
        text: 'Gluten Free',
    },
    {
        imgSrc: '/images/icon4.png', // Provide the correct image path
        text: 'Non GMO',
    },
];

const OnlyTheGoodStuff: React.FC = () => {
    return (
        <div className="text-center py-12 bg-white">
            <h2 className="text-3xl font-bold mb-36">Only The Good Stuff</h2>
            <div className="flex justify-between space-x-8 mb-8 ml-44 mr-44">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {feature.imgSrc && (
                            <img src={feature.imgSrc} alt={feature.text} className="w-12 h-12 mb-4" />
                        )}
                        <p className="text-lg font-medium text-gray-700">{feature.text}</p>
                    </div>
                ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">SIMPLE INGREDIENTS. NO JUNK.®</h3>
        </div>
    );
};

export default OnlyTheGoodStuff;
