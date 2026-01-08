"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Millisecond } from "@/constants/millisecond";
import { EstimationResult } from "@/types/estimation-result";
import { TimeUtils } from "@/utils/time";

export type ResultCardProps = {
  item: EstimationResult;
};

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
  const timeFormatted = TimeUtils.formatDuration(item.take / Millisecond.Second);

  return (
    <Card className="w-32 h-40">
      <CardHeader>
        <CardTitle>
          {item.member.name}
          <span className="text-xs"></span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-4xl font-bold">{item.est.label}</CardDescription>
      </CardContent>
      <CardFooter>
        <span className="text-xs text-gray-500">{timeFormatted}</span>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
