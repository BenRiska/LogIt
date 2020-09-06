import React, { useState } from "react";
import fire from "../fire";

const ResourceForm = (props) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <div>
      <button onClick={props.toggleForm}>back</button>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="input">
          <label>Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Link</label>
          <input
            value={link}
            type="text"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ResourceForm;
