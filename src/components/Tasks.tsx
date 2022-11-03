import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context } from "../context/context";
import { ITask } from "../models/ITask";
import Filters from "./Filters";
import TaskItem from "./TaskItem";
interface TasksProps {
  todos: ITask[];
  setTodos: Dispatch<SetStateAction<ITask[]>>;
}
const Tasks: FC<TasksProps> = () => {
  const { tasks, setTasks, initialState } = useContext(Context);
  const [filterValue, setFilterValue] = useState<string>("all");
  const filter = () => {
    if (filterValue == "all") {
      setTasks(initialState);
    } else if (filterValue == "active") {
      const filtered = [...initialState].filter(
        (todo) => todo.completed == false
      );
      setTasks(filtered);
    } else if (filterValue == "completed") {
      const filtered = [...initialState].filter(
        (todo) => todo.completed == true
      );
      setTasks(filtered);
    }
  };
  const clearCompleted = () => {
    setTasks(
      tasks.map((task: ITask) => {
        task.completed = false;
        return task;
      })
    );
  };
  useEffect(() => {
    filter();
  }, [filterValue]);
  return (
    <div className="tasks__list">
      <div style={{ marginBottom: "15px" }}>
        {[...initialState].filter((todo) => todo.completed == false).length}{" "}
        items left
      </div>
      {tasks.length > 0 ? (
        <div>
          <div>
            {tasks.map((todo: ITask, index: number) => (
              <TaskItem key={todo.id} task={todo} index={index + 1} />
            ))}
          </div>
        </div>
      ) : (
        <div>no todos</div>
      )}
      <Filters value={filterValue} setValue={setFilterValue} />
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};
export default Tasks;
