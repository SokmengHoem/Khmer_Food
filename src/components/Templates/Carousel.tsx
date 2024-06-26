import { useState, useEffect } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

interface Props {
  slides: string[];
  autoSlide : boolean;
  autoSlideInterval : number;
}

export default function Carousel({ slides , autoSlide=false, autoSlideInterval=3000}: Props) {
  const [curr, setCurr] = useState<number>(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
     if(!autoSlide) return
     const slideInterval = setInterval(next, autoSlideInterval)
     return () => clearInterval(slideInterval) // Clear the interval when the component unmounts
  }, []);

  return (
    <div className='overflow-hidden relative w-full'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className='w-full h-70 flex-shrink-0'>
            <img src={slide} alt={`Slide ${index + 1}`} className='w-full h-full' />
          </div>
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <CgChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <CgChevronRight size={40} />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-black rounded-full ${
                curr === i ? 'p-2' : 'bg-opacity-50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
