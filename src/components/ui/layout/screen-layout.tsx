import { cn } from "@/lib/utils";
import { DetailedHTMLProps, PropsWithChildren } from "react";

export type ScreenLayoutProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ScreenLayout: React.FC<ScreenLayoutProps> = ({ children, className }) => {
  return <div className={cn("w-screen h-screen overflow-hidden", className)}>{children}</div>;
};

export default ScreenLayout;
