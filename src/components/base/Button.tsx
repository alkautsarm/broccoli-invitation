import { ReactNode } from 'react';

interface IButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ className, children, onClick }: IButtonProps) => {
  let btnStyle =
    'bg-green-600 hover:bg-green-400 text-white p-4 rounded-xs cursor-pointer';

  if (className) {
    btnStyle = `${btnStyle} ${className}`;
  }

  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
