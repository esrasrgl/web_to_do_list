import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { useDispatch, useSelector } from "react-redux";
import { add_item } from "../redux/ToDoSlice";

function ToDoAdd() {
  const [newTask, SetnewTask] = useState("");
  const toDoItems = useSelector((state) => state.toDo.toDoItems);
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
    <div className="toDoList">
      <h1>
        To Do List
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
        <div className="listDiv">
          <ol>
            {toDoItems.map((task, index) => (
              <ToDoItem key={task.id} task={task} />
            ))}
          </ol>
        </div>
      </h1>
    </div>
  );
}

export default ToDoAdd;
