import React, { useState } from "react";
import fire from "../fire";
import Modal from "./Modal";

const Task = (props) => {
  const { title, id, description, date } = props.note;
  const [modal, setModal] = useState(false);
  const deleteTask = () => {
    console.log("deleted");
    fire.firestore().collection("notes").doc(id).delete();
  };

  return (
    <li
      onClick={(e) => props.activateModal(props.note)}
      key={id}
      className="task"
    >
      <h3>{title}</h3>
      <p>{description.slice(0, 8)}...</p>
      <p>{date}</p>
      <div className="del" onClick={deleteTask}>
        <i className="fas fa-times fa-2x"></i>
      </div>
    </li>
  );
};

export default Task;
