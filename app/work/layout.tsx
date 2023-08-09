import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Work and Craft | Rakesh Kumar",
  description:
    "Some of the Projects I have created and the Blogs I have written",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default layout;
