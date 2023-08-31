import React from "react";
import { classNames } from "../lib/util";

const WorkContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "max-w-md sm:max-w-lg md:max-w-3xl  w-full",
        " mx-auto",
        className
      )}
      {...props}
    />
  );
});

WorkContent.displayName = "WorkContent";

const AboutContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "max-w-lg sm:max-w-xl md:max-w-3xl w-full",
        "text-left",
        className
      )}
      {...props}
    />
  );
});

AboutContent.displayName = "AboutContent";

const HomeContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        "max-w-lg sm:max-w-xl md:max-w-3xl w-full",
        "text-center",
        className
      )}
      {...props}
    />
  );
};

const NavContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        "relative",
        "flex items-center justify-between ",
        "h-16",
        "mx-auto md:max-w-7xl",
        className
      )}
      {...props}
    />
  );
};

export { WorkContent, AboutContent, HomeContent, NavContent };
