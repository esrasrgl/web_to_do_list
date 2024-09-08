import Title from "./components/Title";
import React from "react";
import Routers from "./router/Routers";
import "./Theme/theme.css";
import "./styles/todo.css";

function App() {
  return (
    <div className="toDoList">
    <Title>TODO LIST</Title>
    <Routers/>
    </div>
  );
}

export default App;
