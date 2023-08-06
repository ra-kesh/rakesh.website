import React from "react";
import { classNames } from "../lib/util";

const WorkContainer = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "flex flex-col sm:flex-row justify-center",
        "min-h-screen",
        className
      )}
      {...props}
    />
  );
});

WorkContainer.displayName = "WorkContainer";

const AboutContainer = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "flex items-center justify-center",
        "mt-40",
        className
      )}
      {...props}
    />
  );
});

AboutContainer.displayName = "AboutContainer";

interface ListProps<T> {
  item: (props: T) => JSX.Element;
  items: Array<T & { id?: string }>;
  className?: string;
}

function ListContainer<T>({ item: Component, items, className }: ListProps<T>) {
  return (
    <ul
      className={classNames(
        "flex flex-col sm:flex-row items-center justify-center lg:justify-start w-full flex-wrap gap-x-4 px-4",
        className
      )}
      role="list"
    >
      {items.map((item) => (
        <Component key={item.id} {...item} />
      ))}
    </ul>
  );
}

export { WorkContainer, ListContainer, AboutContainer };
