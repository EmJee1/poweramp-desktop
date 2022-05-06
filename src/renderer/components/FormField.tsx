interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  children: JSX.Element | JSX.Element[];
}

const FormField = ({ htmlFor, label, children }: FormFieldProps) => {
  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={htmlFor}
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

FormField.defaultProps = {
  htmlFor: undefined,
  label: undefined,
};

export default FormField;
