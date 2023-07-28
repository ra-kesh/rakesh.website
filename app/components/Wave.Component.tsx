import React from "react";

const Wave = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-block hover:animate-waving-hand ">{children}</span>
  );
};

export default Wave;
