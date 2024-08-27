import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ToDOList = () => {
  const toDoItems = useSelector((state) => state.toDo.toDoItems);

  return (
    <div className="toDoList">
      <div className="listDiv">
        <ol>
          {toDoItems.map((task, index) => (
            <ToDoItem key={task.id} task={task} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDOList;
