import { cn } from "@/lib/utils";
import { DetailedHTMLProps } from "react";

export type GridCenterLayoutProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const GridCenterLayout: React.FC<GridCenterLayoutProps> = ({ className, ...props }) => {
  return <div className={cn("size-full grid grid-cols-[auto_1fr_auto]", className)} {...props}></div>;
};

export default GridCenterLayout;
