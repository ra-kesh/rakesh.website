"use client";

import { NavigationItem } from "@/app/data/actions";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface DropDownProps {
  children: React.ReactNode;
  items: NavigationItem[];
}

export const Dropdown = ({ children, items }: DropDownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <div>
          <Menu.Button>{children}</Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {items.map((item) => {
              return (
                <Menu.Item key={item.id} as="div">
                  {item.text}
                </Menu.Item>
              );
            })}
          </Transition>
        </div>
      )}
    </Menu>
  );
};
