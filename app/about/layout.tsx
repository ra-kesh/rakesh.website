import { Metadata } from "next";
import React from "react";
import { siteConfig } from "../lib/config";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "A brief introduction about myself and what I have been doing",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default layout;
