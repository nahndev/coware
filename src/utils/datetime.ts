import { DateTime as LuxonDatetime } from "luxon";

export class Datetime {
  constructor(private luxon: LuxonDatetime) {}

  toDateTimeFormatted(): string {
    return this.luxon.toFormat("HH:mm dd/MM/yyyy");
  }

  static fromMillis(millis: number) {
    const luxon = LuxonDatetime.fromMillis(millis);
    return new Datetime(luxon);
  }
}
