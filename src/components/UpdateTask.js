import React, { useState } from "react";
import fire from "../fire";

const UpdateTask = (props) => {
  const { title, id, description, date } = props.task;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newDate, setNewDate] = useState(date);
  const [error, setError] = useState("");
  setTimeout(setError, 3000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle === "" || newDescription === "" || newDate === "") {
      setError("Please fill in fields properly.");
      return;
    } else {
      fire
        .firestore()
        .collection("notes")
        .doc(id)
        .update({
          title: newTitle,
          description: newDescription,
          date: newDate,
        })
        .then(() => {
          props.exitModal();
        });
    }
  };

  return (
    <div>
      <button onClick={props.toggleEdit}>back</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <label>Task Name</label>
          <input
            value={newTitle}
            type="text"
            onChange={(e) => {
              setError("");
              setNewTitle(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label>Details</label>
          <textarea
            value={newDescription}
            type="textfield"
            onChange={(e) => {
              setError("");
              setNewDescription(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label>Deadline</label>
          <input
            type="datetime-local"
            onChange={(e) => {
              setError("");
              setNewDate(e.target.value.split("T").join(" "));
            }}
          />
        </div>
        <div>{error}</div>
        <button className="btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateTask;
