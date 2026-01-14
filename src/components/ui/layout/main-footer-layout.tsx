import { cn } from "@/lib/utils";
import { DetailedHTMLProps, PropsWithChildren } from "react";

export type MainFooterLayoutProps = PropsWithChildren<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const MainFooterLayout: React.FC<MainFooterLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full grid grid-rows-[auto_1fr]", className)} {...props}></div>;
};

export default MainFooterLayout;
