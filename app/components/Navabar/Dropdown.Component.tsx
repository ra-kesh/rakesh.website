import { classNames } from "@/app/lib/util";
import { NavigationItem } from "@/app/types";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { MenuGroup, MenuButton, MenuItem, MenuItems } from "..";
import { Icon } from "@iconify/react/dist/iconify.js";

type DropdownProps = {
  children: React.ReactNode;
  items: Array<Array<NavigationItem>>;
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

export const Dropdown = ({ children, items }: DropdownProps) => {
  return (
    <MenuGroup>
      <MenuButton>{children}</MenuButton>
      <DropDownTransition>
        <MenuItems>
          {items.map((section, index) => {
            return (
              <section key={index} className="py-1">
                {section.map((item) => {
                  return (
                    <MenuItem key={item.id}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          rel={item.external ? "noopener noreferrer" : ""}
                          target={item.external ? "_blank" : ""}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-500",
                            "flex items-center px-4 py-3 text-sm font-medium tracking-wide rounded-md cursor-pointer transition ease-in-out duration-300 "
                          )}
                        >
                          {item.icon}
                          {item.text}
                          {item.external && (
                            <Icon
                              icon="feather:external-link"
                              className="ml-auto"
                            />
                          )}
                        </Link>
                      )}
                    </MenuItem>
                  );
                })}
              </section>
            );
          })}
        </MenuItems>
      </DropDownTransition>
    </MenuGroup>
  );
};
