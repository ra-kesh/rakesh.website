import { Menu } from "@headlessui/react";
import React from "react";
import { classNames } from "../lib/util";

const MenuGroup = React.forwardRef<
  React.ElementRef<typeof Menu>,
  React.ComponentPropsWithoutRef<typeof Menu>
>(({ className, ...props }, ref) => {
  return (
    <Menu
      as="div"
      ref={ref}
      className={classNames("relative inline-block text-left", className)}
      {...props}
    />
  );
});

MenuGroup.displayName = Menu.displayName;

const MenuButton = React.forwardRef<
  React.ElementRef<typeof Menu.Button>,
  React.ComponentPropsWithoutRef<typeof Menu.Button>
>(({ className, ...props }, ref) => {
  return (
    <Menu.Button
      ref={ref}
      className={classNames(
        "relative inline-block rounded-lg px-3 py-2",
        " hover:bg-gray-50 text-gray-500 hover:text-gray-900",
        " transition ease-in-out duration-300 ",
        "focus:outline-none focus:ring-2 focus:ring-offset-1 ",
        // 'focus:ring-primary-500'
        className
      )}
      {...props}
    />
  );
});

MenuButton.displayName = Menu.Button.displayName;

const MenuItems = React.forwardRef<
  React.ElementRef<typeof Menu.Items>,
  React.ComponentPropsWithoutRef<typeof Menu.Items>
>(({ className, ...props }, ref) => {
  return (
    <Menu.Items
      ref={ref}
      className={classNames(
        "absolute z-10 right-0 origin-top-right",
        " mt-2 ",
        "bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100",
        "rounded-md shadow-lg",
        "focus:outline-none ring-black ring-opacity-5",
        className
      )}
      {...props}
    />
  );
});

MenuItems.displayName = Menu.Items.displayName;

const MenuItem = React.forwardRef<
  React.ElementRef<typeof Menu.Item>,
  React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => {
  return <Menu.Item ref={ref} className={classNames(className)} {...props} />;
});

MenuItem.displayName = Menu.Item.displayName;

export { MenuGroup, MenuButton, MenuItems, MenuItem };
