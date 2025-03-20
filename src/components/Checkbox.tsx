import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, value, checked }) => {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      className="checkbox"
      value={value}
      checked={checked}
    />
  );
};

export default Checkbox;
