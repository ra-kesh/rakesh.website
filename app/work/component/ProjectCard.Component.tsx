import React from "react";
import { ProjectItem } from "@/app/types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icons,
} from "../../components";
import Link from "next/link";

export const ProjectCard = ({
  description,
  title,
  stack,
  source,
  link,
  linkText,
}: ProjectItem) => {
  return (
    <Card className="mb-5">
      <CardHeader className="h-40">
        <CardTitle className="text-lg font-bold ">{title}</CardTitle>
        <CardDescription className="text-accent-foreground">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-x-2">
          {stack?.map((item, index) => {
            return (
              <span
                key={index}
                className=" text-xs text-muted-foreground font-medium"
              >
                {item}
              </span>
            );
          })}
        </div>
      </CardHeader>
      <CardFooter className="flex gap-x-4 py-1">
        <Link
          href={source}
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-full p-2 cursor-pointer  transition duration-300 ease-in-out "
        >
          <Icons.Github className="h-6 w-6 " />
        </Link>
        <Link
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer transform hover:translate-x-2 transition duration-300 ease-in-out "
        >
          <span className="font-bold ">{linkText} &rarr;</span>
        </Link>
      </CardFooter>
    </Card>
  );
};
