import { Estimation } from "@/types/estimation";
import { Member } from "./member";
import { Timestamp } from "./common";

export type EstimationResult = {
  id: string;
  member: Member;
  result: Estimation;
  timestamp: Timestamp;
};
