import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 ">
      {children}
    </div>
  );
};

export default Container;
