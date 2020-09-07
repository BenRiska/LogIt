import React, { useState } from "react";
import UpdateTask from "./UpdateTask";
import fire from "../fire";

const Modal = (props) => {
  const { title, id, description, date } = props.task;
  const [editTask, setEditTask] = useState(false);
  const deleteTask = () => {
    console.log("deleted");
    fire.firestore().collection("notes").doc(id).delete();
  };

  const toggleEditTask = () => {
    setEditTask(!editTask);
  };

  return (
    <div className="modal">
      {!editTask ? (
        <div className="task-content">
          <button className="btn" onClick={(e) => props.deActivateModal()}>
            Exit
          </button>
          <h3>{title}</h3>
          <p className="modal-date">Deadline - {date}</p>
          <p className="modal-des">{description}</p>
          <button onClick={toggleEditTask}>Edit</button>
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
      ) : (
        <UpdateTask
          task={props.task}
          exitModal={props.deActivateModal}
          toggleEdit={toggleEditTask}
        />
      )}
    </div>
  );
};

export default Modal;
