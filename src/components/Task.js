import React from "react";
import fire from "../fire";

const Task = (props) => {
  let { title, id, description, date } = props.note;
  date = date.split("-");
  const month = date[1];
  const day = date[2].split(" ")[0];
  const deleteTask = () => {
    fire.firestore().collection("notes").doc(id).delete();
  };

  return (
    <li
      onClick={(e) => props.activateModal(props.note)}
      key={id}
      className="task"
    >
      <h3>{title.slice(0, 10)}...</h3>
      <p>{description.slice(0, 8)}...</p>
      <p className="hide-date">{`${month} / ${day}`}</p>
      <div
        className="del"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask();
        }}
      >
        <i className="fas fa-times fa-2x"></i>
      </div>
    </li>
  );
};

export default Task;
