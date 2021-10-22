import Meeting from "./Meeting";

interface ICalenderAppRepository {
  findMeetings: (date: Date) => Promise<Meeting[]>
}

export default ICalenderAppRepository
