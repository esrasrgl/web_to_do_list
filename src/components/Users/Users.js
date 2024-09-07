import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUserInfo } from "../../redux/UserSlice";
import { Card } from "../Card/Card";
import "./Users.css";
const Users = () => {
  const Users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  console.log("Users", Users);

  return (
    <div className="users">
      <h1>Users</h1>
      <ul className="grid">
        {(Users && Array.isArray(Users) ? Users : []).map((user) => (
            <Card user={user}/>
        ))}
      </ul>
      <Link to="/">Go to User ToDos</Link>
    </div>
  );
};

export default Users;
