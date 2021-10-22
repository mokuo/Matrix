import TaskLabel from "./TaskLabel";
import TaskName from "./TaskName";

class Task {
  private name: TaskName

  private label: TaskLabel

  constructor(name: TaskName, label: TaskLabel) {
    this.name = name
    this.label = label
  }
}

export default Task
