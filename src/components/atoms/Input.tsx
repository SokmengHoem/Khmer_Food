import React from 'react';

interface InputProps {
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  className,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <div className={`flex items-center border-2 rounded-sm px-4 py-2 ${className}`}>
      {icon && <div className="mr-2">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent focus:outline-none w-full"
      />
    </div>
  );
};

export default Input;
