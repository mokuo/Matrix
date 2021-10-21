import KeyValueQueue from "../KeyValueQueue";

describe("KeyValueQueue", () => {
  describe("#enqueue", () => {
    it("enqueue できる", () => {
      const queue = new KeyValueQueue()
      queue.enqueue("hoge", "fuga")

      const value = queue.dequeue("hoge")
      expect(value).toEqual("fuga")
    })

    it("dequeue したら値が削除される", () => {
      const queue = new KeyValueQueue()
      queue.enqueue("hoge", "fuga")

      queue.dequeue("hoge")
      const value = queue.dequeue("hoge")
      expect(value).toBeUndefined()
    })

    it("同じキーを指定した場合、上書きされる", () => {
      const queue = new KeyValueQueue()
      queue.enqueue("hoge", "fuga")
      queue.enqueue("hoge", "fugafuga")

      const value = queue.dequeue("hoge")
      expect(value).toEqual("fugafuga")
    })
  })
})
