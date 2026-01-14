import { Identify, OnSuccess } from "@/types/common";
import { RandomHistory, RandomItem, RandomItemWithStatus } from "@/types/random";
import { useCallback } from "react";
import { v4 } from "uuid";
import { useRandomStore } from "./store/random-store";

export const useRandomItems = (): RandomItemWithStatus[] => {
  const histories = useRandomHistories();
  const items = useRandomStore((state) => state.items);

  const historySetByValue = histories.reduce((sum, item) => sum.add(item.value.id), new Set());
  return items.map((item) => {
    return {
      ...item,
      inactive: historySetByValue.has(item.id),
    };
  });
};

export const useActiveRandomItems = () => {
  return useRandomItems().filter((item) => !item.inactive);
};

export const useRandomHistories = () => {
  return useRandomStore((state) => state.histories);
};

export type CreateRandomItemDto = Pick<RandomItem, "label">;
export const useCreateRandomItem = ({ onSuccess }: OnSuccess<RandomItem>) => {
  const setItem = useRandomStore((state) => state.setItem);
  return useCallback(
    (data: CreateRandomItemDto) => {
      const id = v4();
      const item: RandomItem = { id, ...data };
      setItem(id, item);
      onSuccess(item);
      return item;
    },
    [setItem]
  );
};

export const useDeleteRandomItem = () => {
  const setItem = useRandomStore((state) => state.setItem);
  return useCallback(
    (id: Identify) => {
      setItem(id, null);
    },
    [setItem]
  );
};

export type CreateRandomHistoryDto = Pick<RandomHistory, "value">;

export const useCreateRandomHistory = () => {
  const setHistory = useRandomStore((state) => state.setHistory);
  return useCallback(
    (data: CreateRandomHistoryDto) => {
      const id = v4();
      const history: RandomHistory = { id, createdAt: Date.now(), ...data };
      setHistory(id, history);
      return history;
    },
    [setHistory]
  );
};

export const useDeleteRandomHistory = () => {
  const setHistory = useRandomStore((state) => state.setHistory);
  return useCallback(
    (id: Identify) => {
      setHistory(id, null);
    },
    [setHistory]
  );
};
