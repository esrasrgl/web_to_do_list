import React from "react";
import "./Card.css";

export const Card = ({user, text=user.userId }) => {
  const handleClick = () => {
    window.location.href = `/users/${user.userId}`;
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <li key={user.userId} className="list-card">
        <h3 className="card-title">{user.userId}</h3>
      </li>
    </div>
  );
};
