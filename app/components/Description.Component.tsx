import React from "react";

import { classNames } from "../lib/util";

export const Description = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={classNames(
        "max-w-xs ",
        "mx-auto my-4 md:my-8 ",
        "text-base text-accent-foreground",
        className
      )}
      {...props}
    />
  );
};
