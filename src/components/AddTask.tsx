import React, { useContext } from "react";
import { Context } from "../context/context";

const AddTask = () => {
  const { addTodo, input, setInput } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        placeholder="Type title..."
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button style={{ cursor: "pointer" }} onClick={addTodo}>
        Add todo
      </button>
    </div>
  );
};

export default AddTask;
