import React from "react";

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-xs md:max-w-3xl mt-4 md:mt-8 mx-auto text-base text-gray-700 sm:text-lg md:text-xl ">
      {children}
    </p>
  );
};
export default Description;
