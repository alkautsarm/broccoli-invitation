import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button
      className="bg-green-600 hover:bg-green-400 text-white p-4 rounded-xs cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
