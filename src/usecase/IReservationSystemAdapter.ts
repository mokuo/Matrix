import TennisCourt from "@src/domain/models/TennisCourt";

interface IReservationSystemAdapter {
  getTennisCourts: () => Promise<TennisCourt[]>
}

export default IReservationSystemAdapter
