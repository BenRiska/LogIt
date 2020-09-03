import React from "react";

const Modal = (props) => {
  const { title, id, description, date } = props.task;
  return (
    <div className="modal">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
      <button onClick={(e) => props.deActivateModal()}>Exit</button>
    </div>
  );
};

export default Modal;
