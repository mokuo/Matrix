import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter)

/* eslint max-classes-per-file: 0 */
export class DifferentDatesError extends Error {}
export class StartTimeIsAfterEndTimeError extends Error {}

class UsageTime {
  private startTime: Dayjs

  private endTime: Dayjs

  constructor(startTime: Date, endTime: Date) {
    this.startTime = dayjs(startTime)
    this.endTime = dayjs(endTime)

    if (!this.startTime.isSame(this.endTime, 'day')) {
      throw new DifferentDatesError()
    }

    if (this.startTime.isSameOrAfter(this.endTime, 'minute')) {
      throw new StartTimeIsAfterEndTimeError()
    }
  }
}

export default UsageTime
