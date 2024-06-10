import React from 'react';

interface OurProductProps {
  title: string;
  description: string;
  image: string;
  noneImg: string;
}

const ProductHeader: React.FC<OurProductProps> = ({ title, description, image, noneImg }) => {
  return (
    <div className='w-full h-auto md:h-[70vh] flex flex-col md:flex-row items-center gap-10 justify-center p-4 md:p-10'>
      <div className='flex flex-col w-full md:w-[50%] text-center md:text-left'>
        <h1 className='text-3xl md:text-6xl font-extrabold tracking-widest text-gray-700'>{title}</h1>
        <p className='mt-4 md:mt-6 text-base md:text-lg font-medium text-gray-600'>{description}</p>
        <div className='w-20 md:w-40  mx-auto md:mx-0'>
          <img src={noneImg} className='w-full object-cover' alt="" />
        </div>
      </div>
      <div className='w-full h-72 md:w-[30%] overflow-hidden shadow-lg rounded-xl'>
        <img src={image} alt="" className='w-full h-full' />
      </div>
    </div>
  );
};

export default ProductHeader;

