import React, { useState } from "react";
import fire from "../fire";

const TaskForm = (props) => {
  const { userId } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection("notes")
      .add({
        title,
        description,
        userId,
      })
      .then(() => {
        setTitle("");
        setDescription("");
      });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="task-form">
      <div>
        <label>Task Name</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Details</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button>Log It</button>
    </form>
  );
};

export default TaskForm;
