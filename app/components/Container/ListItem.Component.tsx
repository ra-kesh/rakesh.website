import React from "react";

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-lg transition ease-in-out duration-300 sm:w-80 h-40 w-full mb-4">
      {children}
    </li>
  );
};
