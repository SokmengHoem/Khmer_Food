import React from 'react'
import { Link } from 'react-router-dom'

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
    <div className=' w-full h-auto'>
        <div className=' w-[82%] bg-[#D9D9D9] rounded-xl  mx-auto flex items-center'>
            <div>
                <Link to="" className=' text-blue-600 text-lg font-bold'>Show All</Link>
                <Link to="" className=' '>Khmer food</Link>
                <Link to="" className=' '>Num Khmer</Link>
                <Link to="" className=' '>Drink</Link>
                <Link to="" className=' '>More food</Link>
            </div>
            <div>
                search
            </div>
        </div>
    </div>
  );
}
