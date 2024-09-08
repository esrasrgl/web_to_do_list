import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getToDoInfo } from "../redux/ToDoSlice";
import { Link } from "react-router-dom";
import "../styles/todo.css";
import ToDoAdd from "./ToDoAdd";

const ToDOList = () => {
  const toDoItems = useSelector((state) => state.toDo.toDoItems);
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDoInfo(userId));
  }, [dispatch, userId]);

  console.log(Array.isArray(toDoItems)); // true olmalı
  console.log("toDoItems: ", toDoItems);
  console.log("toDoItems: id ", userId);

  return (
    <div className="toDoList">
      <ToDoAdd userId={userId}/>
      <div>
        <ul className="ul-todo">
          {(toDoItems && Array.isArray(toDoItems) ? toDoItems : []).map(
            (task, index) => (
              <ToDoItem key={task.id} task={task} />
            )
          )}
        </ul>
        <Link to="/users">Go to Users</Link>
      </div>
    </div>
  );
};

export default ToDOList;
