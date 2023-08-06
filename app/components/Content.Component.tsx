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
        "max-w-md sm:max-w-lg md:sm:max-w-3xl lg:sm:max-w-5xl w-full",
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
        "max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-5xl w-full",
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
        " max-w-lg sm:max-w-xl md:max-w-4xl  w-full",
        "text-center",
        className
      )}
      {...props}
    />
  );
};

export { WorkContent, AboutContent, HomeContent };
