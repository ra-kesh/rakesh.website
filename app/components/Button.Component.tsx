import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  rel: string;
  target: string;
};

const Button = ({ children, href, rel, target, ...rest }: ButtonProps) => {
  return (
    <Link href={href} passHref target={target}>
      <button
        className="
        inline-flex items-center justify-center w-full sm:w-auto 
        font-medium
        border border-border bg-background shadow-sm hover:bg-muted text-accent-foreground
        rounded-lg cursor-pointer
        transition ease-in-out duration-300
        px-6 py-2 mt-4 sm:mt-0
        "
        rel={rel}
        {...rest}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;
