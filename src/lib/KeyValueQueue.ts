class KeyValueQueue {
  private queue: {[key: string]: string}

  constructor() {
    this.queue = {}
  }

  public enqueue(key: string, value: string) {
    this.queue[key] = value
  }

  public  dequeue(key: string): string | undefined {
    const value = this.queue[key]
    delete this.queue[key]
    return value
  }
}

export default KeyValueQueue
