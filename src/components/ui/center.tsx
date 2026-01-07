import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export type CenterProps = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

const Center: React.FC<CenterProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex justify-center items-center", className)} {...props}>
      {children}
    </div>
  );
};
export default Center;
