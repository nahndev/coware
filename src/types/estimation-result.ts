import { Estimation } from "@/types/estimation";
import { Member } from "./member";
import { Timestamp } from "./common";

export type EstimationResult = {
  id: string;
  member: Member;
  est: Estimation;
  take: number;
};
