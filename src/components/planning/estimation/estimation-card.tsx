import { Estimation } from "@/types/estimation";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export type EstimationCardProps = {
  item: Estimation;
};

const EstimationCard: React.FC<EstimationCardProps> = ({ item }) => {
  return (
    <Card className="w-32 h-40">
      <CardContent>
        <CardDescription>{item.label}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default EstimationCard;
