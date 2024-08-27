import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_item } from "../redux/ToDoSlice";

function ToDoAdd() {
  const [newTask, SetnewTask] = useState("");
  const dispatch = useDispatch();

  const handleInputValue = () => {
    if (newTask.trim() === "") {
      alert("Warning Invalid input !!!");
    } else {
      dispatch(add_item(newTask));
      SetnewTask("");
    }
  };

  return (
    <div className="addDiv">
      <input
        type="text"
        placeholder="add task"
        value={newTask}
        onChange={(e) => SetnewTask(e.target.value)}
      />
      <button className="addBtn" onClick={handleInputValue}>
        Add
      </button>
    </div>
  );
}

export default ToDoAdd;
