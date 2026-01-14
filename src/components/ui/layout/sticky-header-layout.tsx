import { cn } from "@/lib/utils";
import { DetailedHTMLProps, PropsWithChildren } from "react";

export type StickyHeaderLayoutProps = PropsWithChildren<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const StickyHeaderLayout: React.FC<StickyHeaderLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full grid grid-rows-[auto_1fr]", className)} {...props}></div>;
};

export default StickyHeaderLayout;
