"use client";

import { useEstimationDefinitions } from "@/store/estimation";
import EstimationCard from "./estimation-card";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Demo from "./demo";
import ScrollArea from "@/components/ui/scroll-area";
import { EstimationResult } from "@/types/estimation-result";
import { Estimation } from "@/types/estimation";
import { v4 as uuidV4 } from "uuid";

export type EstimationPickerProps = {};

const EstimationPicker: React.FC<EstimationPickerProps> = ({}) => {
  const [result, setResult] = useState<EstimationResult | null>(null);
  const definitions = useEstimationDefinitions();

  const handleClick = (item: Estimation) => {
    setResult({
      id: uuidV4(),
      member: {
        id: "demo-member",
        name: "Demo User",
      },
      est: item,
      take: 5000,
    });
  };

  return (
    <ScrollArea>
      <div className="flex flex-nowrap p-2 gap-2">
        {definitions.map((item) => (
          <div key={item.id} className="flex-none w-32 h-40">
            <EstimationCard item={item} result={result} onClick={() => handleClick(item)} />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default EstimationPicker;
