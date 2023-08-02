import React from "react";

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-xs md:max-w-3xl my-4 md:my-8 mx-auto text-base text-gray-700 sm:text-lg  ">
      {children}
    </p>
  );
};
export default Description;
