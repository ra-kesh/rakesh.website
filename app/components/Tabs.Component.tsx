import { Tab } from "@headlessui/react";
import React from "react";
import { classNames } from "../lib/util";

const TabGroup = React.forwardRef<
  React.ElementRef<typeof Tab.Group>,
  React.ComponentPropsWithoutRef<typeof Tab.Group>
>(({ className, ...props }, ref) => (
  <Tab.Group as="div" ref={ref} className={classNames(className)} {...props} />
));

TabGroup.displayName = Tab.Group.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof Tab.List>,
  React.ComponentPropsWithoutRef<typeof Tab.List>
>(({ className, ...props }, ref) => (
  <Tab.List
    ref={ref}
    className={classNames(
      "mb-4 mx-4 p-1 rounded-xl inline-flex gap-2  border border-border",
      "bg-muted text-muted-foreground",
      className
    )}
    {...props}
  />
));

TabsList.displayName = Tab.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Tab>,
  React.ComponentPropsWithoutRef<typeof Tab>
>(({ className, ...props }, ref) => (
  <Tab
    ref={ref}
    className={({ selected }: { selected: Boolean }) =>
      classNames(
        "py-1 px-4 rounded-lg text-sm hover:text-foreground font-medium  cursor-pointer",
        "transition ease-in-out duration-300",
        // "focus-visible:outline-none focus:outline-none focus:ring-ring focus:ring-2 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected
          ? "bg-background text-foreground border border-border"
          : "text-muted-foreground ",
        className
      )
    }
    {...props}
  />
));

TabsTrigger.displayName = Tab.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof Tab.Panel>,
  React.ComponentPropsWithoutRef<typeof Tab.Panel>
>(({ className, ...props }, ref) => (
  <Tab.Panel
    ref={ref}
    className={classNames("py-4  border-t border-border", className)}
    {...props}
  />
));
TabsContent.displayName = Tab.Panel.displayName;

export { TabGroup, TabsList, TabsTrigger, TabsContent };
