interface FormInputProps {
  type?: 'text' | 'number';
  id: string;
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const FormInput = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  disabled,
}: FormInputProps) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      className={`block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-800 focus:ring-blue-500 ${
        disabled && 'cursor-not-allowed'
      }`}
    />
  );
};

FormInput.defaultProps = {
  placeholder: undefined,
  onChange: undefined,
  type: 'text',
  disabled: false,
};

export default FormInput;
