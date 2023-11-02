import { useState, useEffect } from "react";

import { optionType } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY_OPENWEATHER;

interface InputProps {
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<optionType[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value === "") return setOptions([]);

      getWeather(value);
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  const getWeather = (value: string) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setOptions([data]))
      .catch((error) => console.log(error));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;

    setValue(valor);
  };

  const onOptionSelect = (option: optionType) => {
    console.log(option);
  };

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
