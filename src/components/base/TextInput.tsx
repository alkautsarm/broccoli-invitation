import { UseFormRegisterReturn } from 'react-hook-form';

interface ITextInputProps {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn;
  placeholder?: string;
  type?: 'text' | 'email';
}

const TextInput = ({
  errorMessage,
  inputRegister,
  placeholder,
  type,
}: ITextInputProps) => {
  let inputStyle = 'w-full border-1 rounded-xs py-2 px-3';

  if (errorMessage) {
    inputStyle = `${inputStyle} border-red-700`;
  }

  return (
    <div className="relative mb-2">
      <input
        {...inputRegister}
        className={inputStyle}
        placeholder={placeholder}
        type={type}
      />
      <span
        className={`absolute left-0 text-xs text-red-700 duration-200 ${errorMessage ? 'top-11' : 'top-8'}`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default TextInput;
