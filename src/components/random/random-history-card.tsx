"use client";

import { useDeleteRandomHistory, useRandomHistories } from "@/service/random";
import { RandomHistory } from "@/types/random";
import { Datetime } from "@/utils/datetime";
import { GripVertical, TrashIcon } from "lucide-react";
import ButtonIcon from "../ui/button-icon";
import MainFooterLayout from "../ui/layout/main-footer-layout";

export type RandomHistoryCardProps = {};

const RandomHistoryCard: React.FC<RandomHistoryCardProps> = () => {
  const histories = useRandomHistories();

  return (
    <MainFooterLayout className="w-full p-2  overflow-hidden border">
      <div className="p-2">
        <h2 className="text-lg font-bold">Histories</h2>
      </div>
      <div className="p-2 bg-slate-200 rounded-lg overflow-auto">
        <div className="flex flex-col">
          {histories.map((history) => (
            <div key={history.id}>
              <HistoryRow item={history} />
            </div>
          ))}
        </div>
      </div>
    </MainFooterLayout>
  );
};

type HistoryRowProps = {
  item: RandomHistory;
};
const HistoryRow: React.FC<HistoryRowProps> = ({ item }) => {
  const remove = useDeleteRandomHistory();
  const datetimeFormatted = Datetime.fromMillis(item.createdAt).toDateTimeFormatted();
  return (
    <div className="flex flex-row gap-2 items-center">
      <ButtonIcon className="text-red-500 size-8 rounded-full" icon={TrashIcon} onClick={() => remove(item.id)} />
      <GripVertical className="w-4 text-gray-500" />
      <span>{item.value.label}</span>
      <div className="flex-1" />
      <div>{datetimeFormatted}</div>
    </div>
  );
};

export default RandomHistoryCard;
