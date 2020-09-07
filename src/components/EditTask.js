import React from "react";
import fire from "../fire";

const EditTask = (props) => {
  const { name, id, link } = props.resource;
  const deleteTask = () => {
    console.log("deleted");
    fire.firestore().collection("resources").doc(id).delete();
  };
  return (
    <li className="edit-task">
      <h3>{name}</h3>
      <p>{link}</p>
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

export default EditTask;
