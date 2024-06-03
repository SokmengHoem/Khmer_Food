import React from 'react';

export interface TitleWithIconProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  iconColor?: string;
}

const TitleWithIcon: React.FC<TitleWithIconProps> = ({ title, icon: Icon, iconPosition = 'left', iconColor = 'currentColor' }) => {
  return (
    <div className="flex items-center gap-2">
      {iconPosition === 'left' && <Icon className="w-6 h-6" style={{ color: iconColor }} />}
      <h1 className="text-lg sm:text-lg md:text-lg lg:text-xl text-[#77a240] px-2">
        {title}
      </h1>
      {iconPosition === 'right' && <Icon className="w-6 h-6" style={{ color: iconColor }} />}
    </div>
  );
};

export default TitleWithIcon;

