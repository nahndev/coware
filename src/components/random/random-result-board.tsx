"use client";

import { useActiveRandomItems, useCreateRandomHistory } from "@/service/random";
import { RandomUtils } from "@/utils/random";
import { motion, useAnimation } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import RandomCard from "./random-card";
import RandomResultDialog from "./random-result-dialog";

const CARD_WIDTH = 200;
const CARD_BUFFER_SIZE = 5;

const getResultTranslateX = (size: number, value: number) => {
  const boxPadding = (CARD_BUFFER_SIZE * size + value) * CARD_WIDTH;
  const itemPadding = Math.random() * (CARD_WIDTH * 0.6) + CARD_WIDTH * 0.2;
  return -(boxPadding + itemPadding);
};

export type RandomResultBoardProps = {};

const RandomResultBoard: React.FC<RandomResultBoardProps> = () => {
  const items = useActiveRandomItems();
  const animation = useAnimation();
  const [value, setValue] = useState(-1);

  const createHistory = useCreateRandomHistory();
  const displayItems = useMemo(() => RandomUtils.repeat(items, CARD_BUFFER_SIZE + 1), [items]);
  const selectedIndex = useMemo(() => (value < 0 ? -1 : items.length * CARD_BUFFER_SIZE + value), [items, value]);

  const handleReset = () => {
    setValue(-1);
    animation.set({ translateX: 0 });
  };

  const handleStart = () => {
    handleReset();
    const nextValue = Math.floor(Math.random() * items.length);
    const translateX = getResultTranslateX(items.length, nextValue);

    animation.start({ translateX }, { duration: 5, ease: [0, 0, 0.25, 1] }).then(() => {
      setValue(nextValue);
    });
  };

  const handleSubmit = () => {
    createHistory({ value: items[value] });
    handleReset();
  };

  return (
    <div className="w-full overflow-hidden p-10">
      <div className="relative border-y-2 border-gray-200 bg-slate-100 overflow-hidden">
        <div className="w-full translate-x-1/2">
          <motion.div animate={animation} className="flex flex-row flex-nowrap">
            {displayItems.map((item, index) => (
              <div key={index} className="flex-none h-20" style={{ width: CARD_WIDTH }}>
                <RandomCard item={item} selected={index === selectedIndex} disabled={value > 0} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute w-1 h-full bg-blue-500/50 top-0 left-1/2"></div>
      </div>
      <div>
        <Button className="mt-4" onClick={handleStart}>
          Start Random
        </Button>
      </div>
      {items[value] && <RandomResultDialog item={items[value]} onSubmit={handleSubmit} onCancel={handleReset} />}
    </div>
  );
};

export default RandomResultBoard;
