import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function ToDoList() {
  const [tasks, SetTasks] = useState(["task1", "task2"]);
  const [newTask, SetnewTask] = useState("");

  function addTask() {
    SetTasks((t) => [...t, newTask]);
    SetnewTask("");
  }
  function isDoneTask() {}

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
          <button className="addBtn" onClick={addTask}>
            Add
          </button>
        </div>
        <div className="listDiv">
          <ol>
            {tasks.map((task, index) => (
              <ToDoItem
              key={index}
                task={task}
                index={index}
                tasks={tasks}
                SetTasks={SetTasks}
              />
            ))}
          </ol>
        </div>
      </h1>
    </div>
  );
}

export default ToDoList;
