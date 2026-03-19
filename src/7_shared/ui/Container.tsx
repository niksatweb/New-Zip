import type { ReactNode } from "react";

export const Container = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <div
      className={
        "container max-w-354 px-1 flex justify-between items-center " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
};
