import React, { ReactElement } from "react";
import "./styles.scss";

interface Props {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id?: string;
  placeholder?: string;
}

const TextField: React.FC<Props> = ({
  className = "",
  onChange,
  value,
  id,
  placeholder = "",
}: Props): ReactElement => {
  return (
    <>
      <input
        type="text"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export { TextField };
