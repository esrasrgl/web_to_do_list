import { useState } from "react";
import { useDispatch } from "react-redux";
import { editToDo } from "../redux/ToDoSlice";

function ToDoItem({ task }) {
  const [editText, SeteditText] = useState(task.text);
  const [editIndex, SeteditIndex] = useState(null);
  const dispatch = useDispatch();
  const index = task.id;

  function checkBtn(index) {
    const newToDo = {
      ...task,
      title: editText,
    };
    if (editText.trim() === "") {
      alert("Warning Invalid input");
      SeteditText(task.text);
    } else {
      dispatch(editToDo({ id: index, updatedToDo: newToDo }));
      SeteditIndex(null);
    }
  }

  return (
    <li key={index} className="list-todo">
      {index !== editIndex ? (
        <>
          <input type="checkBox" onChange={(val) => dispatch(() => {})} />
          <span className={`text ${task.completed ? "strikethrough" : ""}`}>
            {task.title}
          </span>
          <button className="editBtn" onClick={() => SeteditIndex(index)}>
            Edit
          </button>
          <button className="deleteBtn" onClick={() => dispatch(() => {})}>
            Delete
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="editText"
            placeholder="edit task"
            value={editText}
            onChange={(e) => SeteditText(e.target.value)}
          ></input>
          <button className="checkBtn" onClick={() => checkBtn(index)}>
            Check
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
