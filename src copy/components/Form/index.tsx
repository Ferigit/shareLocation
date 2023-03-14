import React, { ReactElement, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Form: React.FC<IProps> = ({
  children,
  className,
}: IProps): ReactElement => {
  return <form className={className}>{children}</form>;
};

export { Form };
