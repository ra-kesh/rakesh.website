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
  <Tab.List ref={ref} className={classNames(className)} {...props} />
));

TabsList.displayName = Tab.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Tab>,
  React.ComponentPropsWithoutRef<typeof Tab>
>(({ className, ...props }, ref) => (
  <Tab
    ref={ref}
    className={({ selected }: { selected: Boolean }) => classNames(className)}
    {...props}
  />
));
TabsTrigger.displayName = Tab.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof Tab.Panel>,
  React.ComponentPropsWithoutRef<typeof Tab.Panel>
>(({ className, ...props }, ref) => (
  <Tab.Panel ref={ref} className={classNames(className)} {...props} />
));
TabsContent.displayName = Tab.Panel.displayName;

export { TabGroup, TabsList, TabsTrigger, TabsContent };
