import React, { useState, useEffect } from "react";
import fire from "../fire";
import Task from "./Task";

const useNotes = (userId) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unSub = fire
      .firestore()
      .collection("notes")
      .where("userId", "==", userId)
      .onSnapshot((snap) => {
        const newNotes = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(newNotes);
      });

    return () => unSub();
  }, []);
  return notes;
};

const TaskList = (props) => {
  const { userId } = props;
  const notes = useNotes(userId);
  return (
    <div className="task-list">
      <ol>
        {notes.map((note) => (
          <Task key={note.id} note={note} />
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
