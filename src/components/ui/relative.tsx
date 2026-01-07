import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export type RelativeProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

const Relative: React.FC<RelativeProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
};

export default Relative;
