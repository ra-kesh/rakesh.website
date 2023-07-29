import React from "react";
import { Navbar } from "..";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex flex-col justify-center">{children}</main>;
};

export const Standard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <NextSeo {...defaultSeoProps} {...seo} /> */}
      <Navbar.Standard />
      <Main>{children}</Main>
    </>
  );
};
