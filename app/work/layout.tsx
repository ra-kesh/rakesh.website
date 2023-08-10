import { Metadata } from "next";
import React from "react";
import { siteConfig } from "../lib/config";

export const metadata: Metadata = {
  title: `Work | ${siteConfig.name}`,
  description:
    "Some of the Projects I have created and the Blogs I have written",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default layout;
