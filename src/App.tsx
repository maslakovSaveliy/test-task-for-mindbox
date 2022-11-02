import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { Context } from "./context/context";
import { ITask } from "./models/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "Go shopping", completed: false },
    { id: 2, title: "Watching film", completed: true },
    { id: 3, title: "Do homework", completed: false },
  ]);
  const [initialState, setInitialState] = useState<ITask[]>(tasks);
  const [input, setInput] = useState<string>("");
  const addTodo = () => {
    setTasks([...tasks, { title: input, completed: false, id: Date.now() }]);
    setInitialState([
      ...tasks,
      { title: input, completed: false, id: Date.now() },
    ]);
    setInput("");
  };
  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
        input,
        setInput,
        addTodo,
        initialState,
        setInitialState,
      }}
    >
      <div className="App">
        <h1>Todos</h1>
        <div className="block">
          <AddTask />
          <Tasks todos={tasks} setTodos={setTasks} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
