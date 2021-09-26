import ReservationSystemAdapter from "../ReservationSystemAdapter";

describe("ReservationSystemAdapter", () => {
  it("hoge", async () => {
    const adapter = new ReservationSystemAdapter()
    await adapter.getTennisCourts()
  })
})
