import React from "react";

import { classNames } from "../lib/util";

export const Description = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={classNames(
        "max-w-xs md:max-w-4xl",
        "mx-auto my-4 md:my-8 ",
        "text-base",
        className
      )}
      {...props}
    />
  );
};
