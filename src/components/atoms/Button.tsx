import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger'|'default'|'myWeb';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  variant = 'primary',
}) => {
  const baseClasses = 'flex items-center justify-center px-6 py-2 font-medium';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    default: " border",
    myWeb: " px-6 py-3 bg-[#920E07]  rounded-full text-white font-medium hover:bg-[#933531]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled || loading ? disabledClasses : ''}`}
      disabled={disabled || loading}
    >
      {loading && <span className="loader mr-2"></span>}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
