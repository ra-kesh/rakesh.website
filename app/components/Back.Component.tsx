import React from "react";
import { useRouter } from "next/navigation";
import { PhArrowBendUpLeftBold } from "./Icon.Component";

export const Back = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div
        onClick={() => router.back()}
        className="absolute -top-16 sm:-left-16 sm:top-0 md:-left-24 lg:-left-32 flex gap-2 items-center cursor-pointer text-muted-foreground "
      >
        <PhArrowBendUpLeftBold />
        <span className="text-sm italic text-muted-foreground">back</span>
      </div>
    </div>
  );
};
