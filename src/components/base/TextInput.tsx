interface ITextInputProps {
  errorMessage?: string;
  placeholder?: string;
  type?: 'text' | 'email';
}

const TextInput = ({ errorMessage, placeholder, type }: ITextInputProps) => {
  let inputStyle = 'w-full border-1 rounded-xs py-2 px-3';

  if (errorMessage) {
    inputStyle = `${inputStyle} border-red-700`;
  }

  return (
    <div>
      <input className={inputStyle} placeholder={placeholder} type={type} />
      {errorMessage && (
        <span className="text-sm text-red-700">{errorMessage}</span>
      )}
    </div>
  );
};

export default TextInput;
