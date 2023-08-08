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
        " hover:bg-accent focus:bg-accent text-accent-foreground",
        " transition ease-in-out duration-300 ",
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
        "absolute z-10 right-0 origin-top-right mt-2",
        "backdrop-blur-sm bg-popover/80 text-popover-foreground border border-border",
        "rounded-lg shadow-md",
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
  return (
    <Menu.Item
      ref={ref}
      className={classNames(
        "hover:bg-muted focus:bg-muted text-accent-foreground  ",
        className
      )}
      {...props}
    />
  );
});

MenuItem.displayName = Menu.Item.displayName;

export { MenuGroup, MenuButton, MenuItems, MenuItem };
