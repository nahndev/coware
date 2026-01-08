export class TimeUtils {
  static formatDuration(seconds: number): string {
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds) % 60;

    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
}
