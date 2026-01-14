import { cn } from "@/lib/utils";
import { DetailedHTMLProps, PropsWithChildren } from "react";

export type MainHeaderLayoutProps = PropsWithChildren<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const MainHeaderLayout: React.FC<MainHeaderLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full grid grid-rows-[1fr_auto]", className)} {...props}></div>;
};

export default MainHeaderLayout;
