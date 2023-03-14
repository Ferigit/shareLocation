import React, { ReactElement } from "react";
import { nanoid } from "nanoid";
import "./styles.scss";

interface IOption {
  label: string;
  value: string;
}

interface Props {
  className?: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  value: string;
  options: IOption[];
  id?: string;
}

const DropDownField: React.FC<Props> = ({
  className = "",
  onChange,
  value,
  options,
  id,
}: Props): ReactElement => {
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 select-input"
      >
        <option key={nanoid()} value={""}>
          Select
        </option>
        {options.map((option: IOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export { DropDownField };
