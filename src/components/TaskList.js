import React, { useState, useEffect } from "react";
import fire from "../fire";
import Task from "./Task";
import Modal from "./Modal";
import Widgets from "./Widgets";

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
  const [modal, setModal] = useState(false);
  const [modalTask, setModalTask] = useState("");

  const activateModal = (note) => {
    setModal(!modal);
    setModalTask(note);
  };
  const deActivateModal = () => {
    setModal(!modal);
    setModalTask("");
  };

  return (
    <div className="task-list-section">
      {!modal ? (
        <ul className="task-list">
          {notes.map((note) => (
            <Task activateModal={activateModal} key={note.id} note={note} />
          ))}
        </ul>
      ) : (
        <Modal task={modalTask} deActivateModal={deActivateModal} />
      )}
      <div className="widgets-container">
        <Widgets />
      </div>
    </div>
  );
};

export default TaskList;
