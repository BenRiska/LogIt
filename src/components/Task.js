import React from "react";
import fire from "../fire";

const Task = (props) => {
  const { title, id, description } = props.note;

  const deleteTask = () => {
    console.log("deleted");
    fire.firestore().collection("notes").doc(id).delete();
  };

  return (
    <li key={id} className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <div onClick={deleteTask}>Delete</div>
    </li>
  );
};

export default Task;
