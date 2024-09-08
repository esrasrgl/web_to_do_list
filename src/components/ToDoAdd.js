import React, { useState } from "react";
import Modal from "./Modal/Modal";

function ToDoAdd(userId) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <button className="modalBtn" onClick={handleShowModal}>
        Add
      </button>
      {showModal && (
        <Modal
        onClose={handleClose}
        userId={userId}
      />
      )}
    </div>
  );
}

export default ToDoAdd;
