import { cn } from "@/lib/utils";
import { DetailedHTMLProps } from "react";

export type SidebarLayoutProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full grid grid-cols-[auto_1fr]")} {...props}></div>;
};

export default SidebarLayout;
