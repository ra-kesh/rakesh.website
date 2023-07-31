import React from "react";

export const Project = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-md sm:max-w-lg md:sm:max-w-3xl lg:sm:max-w-5xl w-full mx-auto">
      {children}
    </div>
  );
};
