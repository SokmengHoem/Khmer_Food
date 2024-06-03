

import { IconType } from 'react-icons';

type Props = {
  IconComponent: IconType;
  size?: number | string;
  color?: string;
  className?: string;
};

export default function Icon({ IconComponent, size = 24, color = 'black', className = '' }: Props) {
  return (
    <div className=' relative'>
        <IconComponent size={size} color={color} className={className} />
        <div className=' absolute -top-3 -right-3 bg-red-600 px-[5px] rounded-full text-white text-[12px]'>0</div>
    </div>
  );
}
