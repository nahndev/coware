import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export type AbsoluteProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & {
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  fluid?: boolean;
};

const Absolute: React.FC<AbsoluteProps> = ({ children, className, top, left, right, bottom, fluid, ...props }) => {
  return (
    <div
      className={cn(
        "absolute",
        top && "top-0 w-full left-0",
        left && "left-0 h-full top-0",
        right && "right-0 h-full top-0",
        bottom && "bottom-0 w-full left-0",
        fluid && "top-0 right-0 bottom-0 left-0 w-full h-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Absolute;
