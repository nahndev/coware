import { Identify } from "./common";

export type RandomHistory = {
  id: Identify;
  value: RandomItem["id"];
  at: number;
};

export type RandomItem = {
  id: Identify;
  label: string;
};
