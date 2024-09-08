import React from "react";
import "./Modal.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/ToDoSlice";
import { CloseBtn } from "./CloseBtn";

export default function Modal({ onClose, userId }) {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => setNewTask(event.target.value);

  const handleSubmit = () => {
    const newToDo = {
      title: newTask,
      userId: userId,
      completed: false,
    };
    if (newTask.trim() === "") {
      alert("Warning Invalid input !!!");
    } else {
      dispatch(addToDo(newToDo));
      setNewTask("");
      onClose();
    }
  };

  return (
    <div data-testid="modal" className="modal" onClick={onClose}>
      <div className="overlay"></div>
      <div
        data-testid="modal-content"
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClose={onClose} />
        <h1>Add new to-do</h1>
        <div className="text-container">
          <textarea
            placeholder="Todo"
            value={newTask}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
