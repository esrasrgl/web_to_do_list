import ToDoAdd from "./components/ToDoAdd";
import Title from "./components/Title";
import ToDOList from "./components/ToDoList";
import todo from "./styles/todo.css";

function App() {
  return (
    <>
      <Title>TODO LIST</Title>
      <ToDoAdd />
      <ToDOList/>
    </>
  );
}

export default App;
