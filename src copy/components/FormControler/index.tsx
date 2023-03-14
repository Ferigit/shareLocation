import React, { ReactElement, ReactNode } from "react";
import "./styles.scss";

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
  label?: string;
}

const FormControl: React.FC<Props> = ({
  title = "",
  children,
  className = "",
  label,
}: Props): ReactElement => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        {label && (
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            {label}
          </label>
        )}
      </div>
      <div className="md:w-2/3">{children}</div>
    </div>
  );
};

export { FormControl };
