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
        text-gray-500 hover:text-gray-600
        font-medium
        border-2 border-gray-200 
        rounded-lg cursor-pointer
        transition ease-in-out duration-300
        px-6 py-2
        focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-primary-500
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
