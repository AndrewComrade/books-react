import React, { FC } from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto px-[20px] max-w-[1600px]">{children}</div>;
};
