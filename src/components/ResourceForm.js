import React, { useState } from "react";
import EditTask from "./EditTask";
import fire from "../fire";
import useResources from "../FireTasks/useResources";

const ResourceForm = (props) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const resources = useResources(props.userId);
  setTimeout(setError, 3000);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || link === "") {
      setError("Please fill in fields properly.");
      return;
    } else {
      fire
        .firestore()
        .collection("resources")
        .add({
          name,
          link,
          userId: props.userId,
        })
        .then(() => {
          setName("");
          setLink("");
        });
    }
  };

  return (
    <div className="resource-form">
      <div onClick={props.toggleForm}>
        <i class="fas fa-backward back-icon fa-2x"></i>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <h3 className="title">Add Resource</h3>
        <div className="input">
          <label>Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setError("");
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label>Link</label>
          <input
            value={link}
            type="text"
            onChange={(e) => {
              setError("");
              setLink(e.target.value);
            }}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="btn">Add</button>
      </form>
      <div className="current-resources">
        <ul>
          {resources &&
            resources.map((resource) => <EditTask resource={resource} />)}
        </ul>
      </div>
    </div>
  );
};

export default ResourceForm;
