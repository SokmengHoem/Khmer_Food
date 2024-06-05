import React from 'react'


interface OurProductProps {
    title: string;
    description: string;
    image: string;
    noneImg?: string;
}

export default function ProductHeader({title, description, image, noneImg}: OurProductProps) {
  return (
    <div className=' w-full h-[70vh] bg-[#fdfaf2] flex items-center gap-10 justify-center'>
        <div className=' flex flex-col w-[50%]'>
            <h1 className=' text-6xl font-extrabold tracking-widest text-gray-700'>{title}</h1>
            <p className=' mt-6 text-lg font-medium text-gray-600'>{description}</p>
            <div className=' w-40'>
                <img src={noneImg} className=' w-full object-cover' alt="" />
            </div>
        </div>
        <div className='w-[30%] shadow-xl'>
           <img src={image} alt=""  className=' w-full rounded-xl'/>
        </div>
    </div>
  )
}
