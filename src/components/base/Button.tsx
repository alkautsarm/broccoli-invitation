import { ReactNode } from 'react';

interface IButtonProps {
  className?: string;
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
}

const Button = ({ className, children, loading, onClick }: IButtonProps) => {
  let btnStyle = 'text-white p-4 rounded-xs';

  if (loading) {
    btnStyle = `${btnStyle} bg-green-300`;
  } else {
    btnStyle = `${btnStyle} bg-green-600 hover:bg-green-400 cursor-pointer`;
  }

  if (className) {
    btnStyle = `${btnStyle} ${className}`;
  }

  return (
    <button className={btnStyle} disabled={loading} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
