import React, { FC } from "react";

interface MainProps {
  children?: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-[100vh]">{children}</div>
  );
};
