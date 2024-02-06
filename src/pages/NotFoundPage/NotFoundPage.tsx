import React, { FC } from "react";

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2>Oops! Somthing wrong!</h2>
    </div>
  );
};
