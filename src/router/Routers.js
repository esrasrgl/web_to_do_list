import React from "react";
import ToDOList from "../components/ToDoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "../components/Users/Users";
import { Link } from "react-router-dom";
export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Link to={`/users`}>users</Link>} />
        <Route path="/users/:userId" element={<ToDOList />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}
