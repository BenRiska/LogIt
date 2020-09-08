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
          <button
            className="btn task-btn"
            onClick={(e) => props.deActivateModal()}
          >
            Exit
          </button>
          <h3>{title}</h3>
          <p className="modal-date">Deadline - {date}</p>
          <p className="modal-des">{description}</p>
          <div className="modal-btns">
            <button className="btn" onClick={toggleEditTask}>
              Edit
            </button>
            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask();
                setTimeout(props.deActivateModal, 500);
              }}
            >
              Delete
            </button>
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
