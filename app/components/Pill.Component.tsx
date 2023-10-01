import React, { useState } from "react";
import { PhCopySimpleBold, PhCopySimpleDuotone } from "./Icon.Component";

export const CopyPill = ({ textToCopy }: { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
  };

  return (
    <div className="flex items-center border border-border mt-20 py-2 px-4 max-w-fit mx-auto rounded-full">
      <p className="text-sm text-accent-foreground">Email : {textToCopy}</p>
      <button
        onClick={copyToClipboard}
        className="ml-4 transform active:scale-75 transition-transform"
      >
        {isCopied ? <PhCopySimpleDuotone /> : <PhCopySimpleBold />}
      </button>
    </div>
  );
};

export const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center border border-border mb-6 py-2 px-4 max-w-fit mx-auto rounded-full gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
      </span>
      {children}
    </div>
  );
};
