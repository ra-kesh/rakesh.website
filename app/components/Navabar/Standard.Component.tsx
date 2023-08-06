import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavContainer, NavContent, Navbar } from "..";
import { Icon } from "@iconify/react";
import { NAVIGATIONS } from "@/app/data";
import { usePathname } from "next/navigation";

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
          <span>{pathName}</span>
          <Navbar.Dropdown items={NAVIGATIONS}>
            <Icon icon="feather:menu"></Icon>
          </Navbar.Dropdown>
        </NavContent>
      </NavContainer>
    </DisclousureNav>
  );
};

const useGetPathName = () => {
  let pathName = usePathname();

  if (pathName === "/") {
    return (pathName = "~/home");
  } else {
    return "~" + pathName;
  }
};
