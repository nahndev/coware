import { RandomItem } from "@/types/random";

export class RandomUtils {
  static repeat(items: RandomItem[], count: number): RandomItem[] {
    return new Array(count).fill(items).flat();
  }
}
