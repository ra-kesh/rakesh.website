import { classNames } from "@/app/lib/util";
import { NavigationItem } from "@/app/types";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";

type DropdownProps = {
  children: React.ReactNode;
  items: Array<NavigationItem>;
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

const MenuItemsClassName =
  "absolute z-10 right-0 origin-top-right w-56 mt-2 p-2 bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-md shadow-lg focus:outline-none ring-black ring-opacity-5";

const MenuButtonClassName =
  "relative inline-block px-3 py-2 hover:bg-gray-50 text-gray-500 hover:text-gray-900 rounded-lg transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500";

export const Dropdown = ({ children, items }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={MenuButtonClassName}>{children}</Menu.Button>
      <DropDownTransition>
        <Menu.Items className={MenuItemsClassName}>
          {items.map((item) => {
            return (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    rel={item.external ? "noopener noreferrer" : ""}
                    target={item.external ? "_blank" : ""}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-500",
                      "flex items-center px-4 py-3 text-sm font-medium tracking-wide rounded-md cursor-pointer transition ease-in-out duration-300 "
                    )}
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </DropDownTransition>
    </Menu>
  );
};
