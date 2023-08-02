import React from "react";
import { classNames } from "../lib/util";

const TitlePrimary = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={classNames(
        "text-gray-900 text-4xl md:text-5xl font-extrabold tracking-normal",
        className
      )}
      {...props}
    />
  );
};

const TitleSecondary = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={classNames(
        "text-2xl md:text-3xl font-bold text-gray-900",
        "max-w-xs md:max-w-3xl mx-auto",
        "leading-tight tracking-tighter lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  );
};

export { TitlePrimary, TitleSecondary };
