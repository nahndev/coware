import { Identify } from "@/types/common";
import { RandomHistory, RandomItem } from "@/types/random";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
          ? [...get().items.filter((it) => it.id !== id), item]
          : get().items.filter((it) => it.id !== id);
        set({ items });
      },
      setHistory: (id, history) => {
        const histories = history
          ? [...get().histories.filter((it) => it.id !== id), history]
          : get().histories.filter((it) => it.id !== id);
        set({ histories });
      },
    }),
    { name: RANDOM_STORE_KEY }
  )
);
