import React, { useState, useEffect } from "react";
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

  const startClock = () => {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
  };

  useEffect(() => {
    startClock();
  });

  return (
    <form onSubmit={(e) => onSubmit(e)} className="task-form">
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>
        <div className="min">
          <div className="mn" id="mn"></div>
        </div>
        <div className="sec">
          <div className="sc" id="sc"></div>
        </div>
      </div>
      <h3>Add Task</h3>
      <div className="input">
        <label>Task Name</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="input">
        <label>Details</label>
        <textarea
          type="textfield"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="btn">Log It</button>
    </form>
  );
};

export default TaskForm;
