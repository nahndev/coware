import { Estimation } from "@/types/estimation";

export const useEstimationDefinitions = () => {
  return [
    { id: "1", value: 1, label: "1" },
    { id: "2", value: 2, label: "2" },
    { id: "3", value: 3, label: "3" },
    { id: "5", value: 5, label: "5" },
    { id: "8", value: 8, label: "8" },
    { id: "13", value: 13, label: "13" },
    { id: "20", value: 20, label: "20" },
    { id: "40", value: 40, label: "40" },
    { id: "100", value: 100, label: "100" },
    { id: "?", value: -1, label: "?" },
  ] as Estimation[];
};
