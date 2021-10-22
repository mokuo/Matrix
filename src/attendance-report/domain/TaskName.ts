class TaskName {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  public toString(): string {
    return this.value
  }
}

export default TaskName
