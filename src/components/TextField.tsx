import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
}
const TextField: React.FC<TextFieldProps> = ({ onChange, value, name }) => {
  return (
    <input
      name={name}
      type="text"
      onChange={onChange}
      value={value}
      className="input-field"
    />
  );
};

export default TextField;
