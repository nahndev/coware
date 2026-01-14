"use client";

import { cn } from "@/lib/utils";
import { useCreateRandomItem, useDeleteRandomItem, useRandomItems } from "@/service/random";
import { RandomItemWithStatus } from "@/types/random";
import { GripVertical, PlusIcon, TrashIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import ButtonIcon from "../ui/button-icon";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import MainActionLayout from "../ui/layout/main-action-layout";

export type RandomContainerProps = {};

const RandomContainer: React.FC<RandomContainerProps> = () => {
  const items = useRandomItems();
  return (
    <Card className="p-2 size-full grid grid-rows-[1fr_auto] overflow-hidden">
      <CardContent className="p-2 overflow-auto">
        {items.map((item) => (
          <div key={item.id}>
            <RandomRow item={item} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <RandomCreatorRow />
      </CardFooter>
    </Card>
  );
};

type RandomRowProps = {
  item: RandomItemWithStatus;
};
const RandomRow: React.FC<RandomRowProps> = ({ item }) => {
  const remove = useDeleteRandomItem();

  return (
    <div className={cn("p-2", item.inactive ? "pointer-events-none opacity-50" : "cursor-pointer")}>
      <div className="flex flex-row gap-2 items-center">
        <ButtonIcon className="text-red-500 size-8 rounded-full" icon={TrashIcon} onClick={() => remove(item.id)} />
        <GripVertical className="w-4 text-gray-500" />
        {item.label}
      </div>
    </div>
  );
};

type RandomCreatorRowProps = {};
const RandomCreatorRow: React.FC<RandomCreatorRowProps> = () => {
  const [label, setLabel] = useState("");
  const create = useCreateRandomItem({
    onSuccess: () => setLabel(""),
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    create({ label });
  };

  return (
    <form className="size-full" onSubmit={handleSubmit}>
      <MainActionLayout>
        <Input value={label} onChange={(e) => setLabel(e.target.value)} />
        <ButtonIcon type="submit" disabled={label.length <= 0} icon={PlusIcon} />
      </MainActionLayout>
    </form>
  );
};

export default RandomContainer;
