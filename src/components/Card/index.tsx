import React, { ReactElement, ReactNode } from "react";
import "./styles.scss";

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({
  title = "",
  children,
  className = "",
  onClick,
}: Props): ReactElement => {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg pb-3">
      {title ? (
        <div className="flex justify-start items-center p-2 card-header">
          <h3 className="card-title text-white font-bold">{title}</h3>
        </div>
      ) : null}
      <div className="p-3">{children}</div>
    </div>
  );
};

export { Card };
