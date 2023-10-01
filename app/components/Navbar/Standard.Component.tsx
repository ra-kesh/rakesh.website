import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavContainer, NavContent, Navbar } from "..";
import { NAVIGATIONS } from "@/app/data";
import { useGetPathName } from "./useGetPathName.hook";
import { PhListBold } from "../Icon.Component";

const DisclousureNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Disclosure
      as="nav"
      className="mt-5 sm:mt-0 sm:fixed sm:top-5 left-0 w-full z-10"
    >
      {children}
    </Disclosure>
  );
};

export const Standard = () => {
  const pathName = useGetPathName();

  return (
    <DisclousureNav>
      <NavContainer>
        <NavContent>
          <span className="capitalize font-medium text-accent-foreground">
            ~/&nbsp;{pathName}
          </span>
          <div className="flex items-center gap-x-2">
            <Navbar.Toggle />
            <Navbar.Dropdown items={NAVIGATIONS}>
              <PhListBold />
            </Navbar.Dropdown>
          </div>
        </NavContent>
      </NavContainer>
    </DisclousureNav>
  );
};
