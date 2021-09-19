import FacilityName from "./FacilityName";
import TennisCourtId from "./TennisCourtId";
import TennisCourtName from "./TennisCourtName";
import UsageTime from "./UsageTime";

type TennisCourtStatus = "o" | "x"

class TennisCourt {
  private id?: TennisCourtId

  private name: TennisCourtName

  private facilityName: FacilityName

  private usageTime: UsageTime

  private status: TennisCourtStatus

  constructor(id: TennisCourtId, name: TennisCourtName, facilityName: FacilityName, usageTime: UsageTime, status: TennisCourtStatus) {
    this.id = id
    this.name = name
    this.facilityName = facilityName
    this.usageTime = usageTime
    this.status = status
  }
}

export default TennisCourt;
