import { CreateDocumentDto } from "@/service/api/document";
import { Identify } from "@/types/common";
import { RandomHistory, RandomItem } from "@/types/random";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 } from "uuid";
import { useCallback } from "react";

const RANDOM_STORE_KEY = "@random/random-store";
export type RandomStore = {
  items: RandomItem[];
  histories: RandomHistory[];
  setItem: (id: Identify, item: RandomItem | null) => void;
  setHistory: (id: Identify, history: RandomHistory | null) => void;
};

export const useRandomStore = create<RandomStore>()(
  persist(
    (set, get) => ({
      items: [],
      histories: [],
      setItem: (id, item) => {
        const items = item
          ? get().items.map((it) => (it.id === id ? item : it))
          : get().items.filter((it) => it.id !== id);
        set({ items });
      },
      setHistory: (id, history) => {
        const histories = history
          ? get().histories.map((it) => (it.id === id ? history : it))
          : get().histories.filter((it) => it.id !== id);
        set({ histories });
      },
    }),
    { name: RANDOM_STORE_KEY }
  )
);

export const useRandomItems = () => {
  const data = useRandomStore((state) => state.items);
  return { data };
};

export const useRandomHistories = () => {
  const data = useRandomStore((state) => state.histories);
  return { data };
};

export type CreateRandomItemDto = Pick<RandomItem, "label">;
export const useSetRandomItem = () => {
  const setItem = useRandomStore((state) => state.setItem);
  return useCallback(
    (data: CreateRandomItemDto) => {
      const id = v4();
      const item: RandomItem = { id, ...data };
      setItem(id, item);
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

export const useSetRandomHistory = () => {
  const setHistory = useRandomStore((state) => state.setHistory);
  return useCallback(
    (data: CreateRandomHistoryDto) => {
      const id = v4();
      const history: RandomHistory = { id, value: data.value, at: Date.now() };
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
