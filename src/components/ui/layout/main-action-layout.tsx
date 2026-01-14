import { cn } from "@/lib/utils";
import { DetailedHTMLProps } from "react";

export type MainActionLayoutProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const MainActionLayout: React.FC<MainActionLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full grid grid-cols-[1fr_auto]")} {...props}></div>;
};

export default MainActionLayout;
