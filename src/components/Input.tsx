import { useState } from "react";

import { optionType } from "../types";
// API KEY FROM ENV
const API_KEY = process.env.API_KEY_OPENWEATHER;

interface InputProps {
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);

  const getWeather = async (value: string) => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
    );
    const data = await response.json();

    setOptions(data);

    return data;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    // event.target.value.trim()

    setValue(value);

    getWeather(value).then((data) => {
      console.log(data);
    });
  };

  const onOptionSelect = (option: optionType) => {};

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="bg-gray-200 w-3/4 rounded-md p-2 my-3 mr-4"
      />
      <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
        {options.map((option: optionType, index: number) => (
          <li key={option.name + "-" + index}>
            <button
              onClick={() => onOptionSelect(option)}
              className="text-left text-sm w-full hover:bg-zing-700 hover:text-white px-2 py-1 cursor-pointer"
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Input;
