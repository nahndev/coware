import { Identify } from "./common";

export type Document = {
  id: Identify;
  name: string;
  desc: string;

  folder: Document | null;
};
