import React, { FC, useContext } from "react";
import { Context } from "../context/context";
import { ITask } from "../models/ITask";
interface TaskProps {
  index: number;
  task: ITask;
}
const TaskItem: FC<TaskProps> = ({ index, task }) => {
  const { tasks, setTasks } = useContext(Context);
  const toggleTodo = (id: number) => {
    setTasks(
      tasks.map((todo: ITask) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const deleteTodo = (id: number) => {
    setTasks(tasks.filter((todo: ITask) => todo.id !== id));
  };
  return (
    <div className="task__item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTodo(task.id)}
      />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        <strong>{index}.</strong> {task.title}
      </span>
      <button onClick={() => deleteTodo(task.id)}>✖</button>
    </div>
  );
};
export default TaskItem;
