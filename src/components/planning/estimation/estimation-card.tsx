import { Estimation } from "@/types/estimation";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { EstimationResult } from "@/types/estimation-result";

export type EstimationCardProps = {
  item: Estimation;
  result: EstimationResult | null;
  onClick: () => void;
};

const EstimationCard: React.FC<EstimationCardProps> = ({ item, result, onClick }) => {
  const isHasResult = !!result;
  const isSelected = isHasResult ? result.est.value === item.value : false;

  return (
    <Card
      className={cn(
        "size-full p-2 duration-300",
        isHasResult ? " cursor-none pointer-events-none" : "cursor-pointer pointer-events-auto",
        isSelected ? "-translate-y-5" : "hover:-translate-y-5 ",
        isSelected ? "bg-orange-500" : "bg-white",
        isHasResult && !isSelected ? "opacity-50" : "opacity-100"
      )}
      onClick={() => onClick()}
    >
      <CardContent
        className={cn(
          "border-2 rounded-lg size-full flex justify-center items-center",
          isSelected ? "border-white" : "border-gray-300"
        )}
      >
        <CardDescription className={cn("text-2xl", isSelected && "text-white")}>{item.label}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default EstimationCard;
