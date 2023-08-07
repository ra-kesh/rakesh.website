import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavContainer, NavContent, Navbar } from "..";
import { Icon } from "@iconify/react";
import { NAVIGATIONS } from "@/app/data";
import { useGetPathName } from "./useGetPathName.hook";

const DisclousureNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Disclosure as="nav" className="fixed top-5 left-0 w-full z-10">
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
          <span className="capitalize font-medium">~/&nbsp;{pathName}</span>
          <div className="flex items-center gap-x-2">
            <Navbar.Toggle />
            <Navbar.Dropdown items={NAVIGATIONS}>
              <Icon icon="feather:menu" />
            </Navbar.Dropdown>
          </div>
        </NavContent>
      </NavContainer>
    </DisclousureNav>
  );
};
