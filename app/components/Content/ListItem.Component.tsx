import React from "react";

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:px-6">
      {children}
    </div>
  );
};
