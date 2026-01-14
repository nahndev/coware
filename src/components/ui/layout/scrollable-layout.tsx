import { cn } from "@/lib/utils";
import { DetailedHTMLProps } from "react";

export type ScrollableLayoutProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ScrollableLayout: React.FC<ScrollableLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full overflow-auto", className)} {...props}></div>;
};

export default ScrollableLayout;
