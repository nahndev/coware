import { cn } from "@/lib/utils";
import { DetailedHTMLProps, PropsWithChildren } from "react";

export type StickyFooterLayoutProps = PropsWithChildren<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const StickyFooterLayout: React.FC<StickyFooterLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("grid grid-rows-[1fr_auto]", className)} {...props}></div>;
};

export default StickyFooterLayout;
