import { useState } from "react";

function ToDoItem({task , index, tasks, SetTasks}) {
  const [editText, SeteditText] = useState("");
  const [editIndex, SeteditIndex] = useState(null);

  function deletTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    SetTasks(updatedTasks);
  }

  function editTask(index) {
    const find = tasks.find((_, i) => i === index);
    if (find) {
      const newTasks = [...tasks];
      newTasks[index] = editText;
      SetTasks(newTasks);
    }
  }

  function checkBtn(index) {
    editTask(index);
    SeteditIndex(null);
    SeteditText("");
  }

  return (
    <li key={index}>
      {index !== editIndex ? (
        <>
        <input type="checkBox"/>
          <span className="text">{task}</span>
          <button className="editBtn" onClick={() => SeteditIndex(index)}>
            Edit
          </button>
          <button className="deleteBtn" onClick={() => deletTask(index)}>
            Delete
          </button>
        </>
      ) : (
        <>
          <input
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