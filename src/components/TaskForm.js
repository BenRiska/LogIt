import React, { useState, useEffect } from "react";
import fire from "../fire";

const TaskForm = (props) => {
  const { userId } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  setTimeout(setError, 3000);
  const fullDate = new Date();
  console.log(fullDate);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || date === "") {
      setError("Please fill in fields properly.");
      return;
    } else {
      fire
        .firestore()
        .collection("notes")
        .add({
          title,
          description,
          date,
          userId,
        })
        .then(() => {
          setTitle("");
          setDescription("");
        });
    }
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
      <div className="date-title">{fullDate.toDateString()}</div>
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
      <div className="form-content">
        <h3>Add Task</h3>
        <div className="input">
          <label>Task Name</label>
          <input
            value={title}
            type="text"
            onChange={(e) => {
              setError("");
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label>Details</label>
          <textarea
            value={description}
            type="textfield"
            onChange={(e) => {
              setError("");
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label>Deadline</label>
          <input
            type="datetime-local"
            onChange={(e) => {
              setError("");
              setDate(e.target.value.split("T").join(" "));
            }}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="btn task-form-btn">Log It</button>
      </div>
    </form>
  );
};

export default TaskForm;
