import { cn } from "@/lib/utils";
import { Button } from "./button";

export type ButtonIconProps = React.ComponentProps<typeof Button> & {
  icon: React.ComponentType<any>;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ className, icon: Icon, ...props }) => {
  return (
    <Button {...props} variant="ghost" className={cn("p-0 cursor-pointer", className)}>
      <Icon />
    </Button>
  );
};

export default ButtonIcon;
