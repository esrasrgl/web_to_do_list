function ToDoItem({ task }) {
  const index = task.id;
  console.log("task ", task);
  return (
    <li key={index}>
      <span className={`text ${task.completed ? "strikethrough" : ""}`}>
        {task.title}
      </span>
    </li>
  );
}

export default ToDoItem;
