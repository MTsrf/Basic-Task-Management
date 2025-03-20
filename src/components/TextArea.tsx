import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  rows: number;
}
const TextArea: React.FC<TextAreaProps> = ({ onChange, value, rows = 3 }) => {
  return <textarea onChange={onChange} value={value} rows={rows} />;
};

export default TextArea;
