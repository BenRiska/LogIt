import React from "react";
import fire from "../fire";

const Modal = (props) => {
  const { title, id, description, date } = props.task;
  const deleteTask = () => {
    console.log("deleted");
    fire.firestore().collection("notes").doc(id).delete();
  };
  return (
    <div className="modal">
      <button className="btn" onClick={(e) => props.deActivateModal()}>
        Exit
      </button>
      <h3>{title}</h3>
      <p className="modal-date">Deadline - {date}</p>
      <p className="modal-des">{description}</p>
      <div
        className="del"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask();
          setTimeout(props.deActivateModal, 500);
        }}
      >
        <i className="fas fa-times fa-2x"></i>
      </div>
    </div>
  );
};

export default Modal;
