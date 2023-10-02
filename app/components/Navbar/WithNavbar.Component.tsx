/* eslint-disable react/display-name */
import React, { Component } from "react";
import { Navbar } from "..";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex flex-col justify-center">{children}</main>;
};

export const withNavbar = <T extends object>(
  Component: React.ComponentType<T>
): React.FC<T> => {
  return (props: T) => (
    <>
      <Navbar.Standard />
      <Main>
        <Component {...props} />
      </Main>
    </>
  );
};
