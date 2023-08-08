import React from "react";
import { MenuButton, MenuGroup, MenuItem, MenuItems } from "..";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { classNames } from "@/app/lib/util";
import { THEMES } from "@/app/data/theme";

export const Toggle = () => {
  const { setTheme } = useTheme();
  return (
    <MenuGroup>
      <MenuButton>
        <Icon icon="feather:sun" className=" block dark:hidden " />
        <Icon icon="feather:moon" className="hidden dark:block" />
      </MenuButton>
      <DropDownTransition>
        <MenuItems className="w-28 flex flex-col p-2 ">
          {THEMES.map((theme) => {
            return (
              <MenuItem
                key={theme.id}
                onClick={() => setTheme(theme.theme)}
                className="rounded-md"
              >
                <span
                  className={classNames(
                    " text-sm font-medium cursor-pointer  px-2 py-2  "
                  )}
                >
                  {theme.text}
                </span>
              </MenuItem>
            );
          })}
        </MenuItems>
      </DropDownTransition>
    </MenuGroup>
  );
};

const DropDownTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {children}
    </Transition>
  );
};
