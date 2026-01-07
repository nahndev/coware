import { EstimationResult } from "@/types/estimation-result";
import { create } from "zustand";

export const useEstimationResults = () => {
  return [
    {
      id: "1",
      member: { id: "m1", name: "Alice" },
      result: { id: "e1", value: 5, label: "5" },
      timestamp: 1767800970330,
    },
    {
      id: "2",
      member: { id: "m2", name: "Bob" },
      result: { id: "e2", value: 8, label: "8" },
      timestamp: 1767800970331,
    },
    {
      id: "3",
      member: { id: "m3", name: "Charlie" },
      result: { id: "e3", value: 3, label: "3" },
      timestamp: 1767800970332,
    },
  ] as EstimationResult[];
};
