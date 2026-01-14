import { cn } from "@/lib/utils";
import { RandomItem } from "@/types/random";

export type RandomCardProps = {
  item: RandomItem;
  selected: boolean;
  disabled: boolean;
};

const RandomCard: React.FC<RandomCardProps> = ({ item, selected, disabled }) => {
  return (
    <div className="p-2 size-full">
      <div
        className={cn(
          "size-full flex justify-center items-center",
          "rounded-lg",
          "duration-200",
          disabled && !selected && "opacity-50",
          selected ? "ring-white ring-2 bg-slate-500" : "bg-slate-400"
        )}
      >
        <p>{item.label}</p>
      </div>
    </div>
  );
};

export default RandomCard;
