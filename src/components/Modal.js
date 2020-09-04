import React from "react";

const Modal = (props) => {
  const { title, description, date } = props.task;
  return (
    <div className="modal">
      <h3>{title}</h3>
      <p className="modal-date">Deadline - {date}</p>
      <p className="modal-des">{description}</p>
      <button className="btn" onClick={(e) => props.deActivateModal()}>
        Exit
      </button>
    </div>
  );
};

export default Modal;
