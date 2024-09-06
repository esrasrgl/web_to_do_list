import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUserInfo } from "../redux/UserSlice";

const Users = () => {
  const Users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  console.log("Users", Users);

  return (
    <div>
      <h1>Selected Boxes</h1>
      <ul>
        {(Users && Array.isArray(Users) ? Users : []).map((user) => (
          <li key={user.userId}>
            {" "}
            <Link to={`/users/${user.userId}`}>{user.userId}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go to User ToDos</Link>
    </div>
  );
};

export default Users;
