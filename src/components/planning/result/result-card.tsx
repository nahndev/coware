import { Estimation } from "@/types/estimation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Member } from "@/types/member";
import { EstimationResult } from "@/types/estimation-result";

export type ResultCardProps = {
  item: EstimationResult;
};

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
  return (
    <Card className="w-32 h-40">
      <CardHeader>
        <CardTitle>
          {item.member.name}
          <span className="text-xs"></span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-4xl font-bold">{item.result.label}</CardDescription>
      </CardContent>
      <CardFooter>
        <span className="text-xs text-gray-500">at {new Date(item.timestamp).toLocaleTimeString()}</span>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
