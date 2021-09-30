import { Browser } from "playwright";
import TennisCourt from "@src/domain/models/TennisCourt"

interface IReservationSystemAdapter {
  getTennisCourts: (browser: Browser) => Promise<TennisCourt[]>
}

export default IReservationSystemAdapter
