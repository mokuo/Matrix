import TennisCourt from "@src/domain/models/TennisCourt";

interface IReservationSystemsAdapter {
  getTennisCourts: () => Promise<TennisCourt[]>
}

export default IReservationSystemsAdapter
