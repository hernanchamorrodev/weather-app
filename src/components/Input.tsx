import { useState } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="bg-gray-200 w-3/4 rounded-md p-2 my-3 mr-4"
    />
  );
};

export default Input;
