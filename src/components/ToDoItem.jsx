import { useState } from "react";
import { delete_item, edit_item, is_done_item } from "../redux/ToDoSlice";
import { useDispatch } from "react-redux";

function ToDoItem({ task }) {
  const [editText, SeteditText] = useState(task.text);
  const [editIndex, SeteditIndex] = useState(null);
  const dispatch = useDispatch();
  const index = task.id;

  function checkBtn(index) {
    if (editText.trim() === "") {
      alert("Warning Invalid input");
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
          <input
            type="checkBox"
            onChange={(val) =>
              dispatch(is_done_item({ id: index, checked: val.target.checked }))
            }
          />
          <span className={`text ${task.isDone ? "strikethrough" : ""}`}>
            {task.text}
          </span>
          <button className="editBtn" onClick={() => SeteditIndex(index)}>
            Edit
          </button>
          <button
            className="deleteBtn"
            onClick={() => dispatch(delete_item(index))}
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
