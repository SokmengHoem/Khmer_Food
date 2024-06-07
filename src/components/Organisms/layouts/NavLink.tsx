import { Input } from 'antd';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type NavActiveProps = {
 showAll?: boolean;
 khmerFood?: boolean;
 numKhmer?: boolean;
 moreFood?: boolean;
 drink?: boolean;
}

export default function NavActive({
  showAll = false,
  khmerFood = false,
  numKhmer = false,
  moreFood = false,
  drink = false,
}: NavActiveProps) {
  return (
    <div className='w-full h-auto'>
      <div className='w-full md:w-[83%] bg-[#F9F9F9] sm:text-center rounded-full mx-auto flex flex-col md:flex-row justify-between py-4 px-6 items-center gap-4 md:gap-0'>
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 text-base md:text-xl'>
          <Link to="/food" className={`${showAll ? "text-blue-500 font-semibold" : ""}`}>Show All</Link>
          <Link to="/food-khmer" className={`${khmerFood ? "text-blue-500 font-semibold" : ""}`}>Khmer food</Link>
          <Link to="/food-num" className={`${numKhmer ? "text-blue-500 font-semibold" : ""}`}>Num Khmer</Link>
          <Link to="/food-drink" className={`${drink ? "text-blue-500 font-semibold" : ""}`}>Drink</Link>
          <Link to="/food-more" className={`${moreFood ? "text-blue-500 font-semibold" : ""}`}>More food</Link>
        </div>
        <div className='w-full md:w-auto'>
          <Input type='text' prefix={<IoSearch />} placeholder="Search food" allowClear className='w-full md:w-62 xl:w-80 sm:w-40 rounded-full hover:border-blue-600 hover:bg-white' />
        </div>
      </div>
    </div>
  );
}
