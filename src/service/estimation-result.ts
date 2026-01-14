import { EstimationResult } from "@/types/estimation-result";
import { create } from "zustand";

export const useEstimationResults = () => {
  return [
    {
      id: "1",
      member: { id: "m1", name: "Alice" },
      est: { id: "e1", value: 5, label: "5" },
      take: 32000,
    },
    {
      id: "2",
      member: { id: "m2", name: "Bob" },
      est: { id: "e2", value: 8, label: "8" },
      take: 40500,
    },
    {
      id: "3",
      member: { id: "m3", name: "Charlie" },
      est: { id: "e3", value: 3, label: "3" },
      take: 15000,
    },
  ] as EstimationResult[];
};
