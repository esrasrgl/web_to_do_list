import { useState } from "react";
import { delete_item, edit_item } from "../redux/ToDoSlice";
import { useDispatch } from "react-redux";

function ToDoItem({ task }) {
  const [editText, SeteditText] = useState("");
  const [editIndex, SeteditIndex] = useState(null);
  const dispatch = useDispatch();
  const index = task.id;

  function checkBtn(index) {
    if (editText.trim() === "") {
      alert("Warning", "Invalid input");
      SeteditText(task.text);
    } else {
      dispatch(edit_item({ id: index, newText: editText }));
      SeteditIndex(null);
    }
  }

  return (
    <li key={index}>
      {index !== editIndex ? (
        <>
          <input type="checkBox" />
          <span className="text">{task.text}</span>
          <button className="editBtn" onClick={() => SeteditIndex(index)}>
            Edit
          </button>
          <button
            className="deleteBtn"
            onClick={() => dispatch(delete_item(task.id))}
          >
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
