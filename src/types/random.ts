import { Identify } from "./common";

export type RandomHistory = {
  id: Identify;
  value: RandomItem;
  createdAt: number;
};

export type RandomItem = {
  id: Identify;
  label: string;
};

export type RandomItemWithStatus = RandomItem & { inactive: boolean };
