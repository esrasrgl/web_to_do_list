import React from "react";

export const CloseBtn = ({ onClose }) => {
  return (
    <div style={style}>
      <button style={style} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  cursor: "pointer",
};
