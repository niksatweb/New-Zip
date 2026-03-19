import type { ReactNode } from "react";

export const Container = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <div
      className={
        "mx-auto container max-w-354 px-1 h-12 flex justify-between items-center " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
};
