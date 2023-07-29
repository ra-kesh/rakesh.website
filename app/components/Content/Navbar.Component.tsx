import React from "react";

export const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-between h-16 ">
      {children}
    </div>
  );
};
