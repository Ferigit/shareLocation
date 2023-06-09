import React, { ReactElement } from "react";

interface Props {
  title?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({
  title = "",
  className = "",
  onClick,
}: Props): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={`text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {title}
    </button>
  );
};

export { Button };
