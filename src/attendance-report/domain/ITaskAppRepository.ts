import Task from "./Task";

interface ITaskAppRepository {
  findTasks: (date: Date) => Promise<Task[]>
}

export default ITaskAppRepository
