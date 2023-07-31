import React from "react";

export const Project = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row min-h-screen">
      {children}
    </div>
  );
};
