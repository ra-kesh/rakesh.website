import React from "react";
const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-gray-900  text-4xl sm:text-4xl md:text-5xl font-extrabold tracking-normal">
      {children}
    </h1>
  );
};

export default Title;
