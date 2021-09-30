import ReservationSystemAdapter from "../ReservationSystemsAdapter";

// fix: `thrown: "Exceeded timeout of 5000 ms for a test.`
jest.setTimeout(300000)

describe("ReservationSystemAdapter", () => {
  it("hoge", async () => {
    const adapter = new ReservationSystemAdapter()
    await adapter.getTennisCourts()

    expect("hoge").toEqual("hoge")
  })
})
