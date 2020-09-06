import React, { useState, useEffect } from "react";
import fire from "../fire";
import Task from "./Task";
import Modal from "./Modal";
import Widgets from "./Widgets";
import ResourceForm from "./ResourceForm";

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
  }, [userId]);
  return notes;
};

const TaskList = (props) => {
  const { userId } = props;
  const notes = useNotes(userId);
  const [modal, setModal] = useState(false);
  const [modalTask, setModalTask] = useState("");
  const [form, setForm] = useState(false);

  const activateModal = (note) => {
    setModal(!modal);
    setModalTask(note);
  };
  const deActivateModal = () => {
    setModal(!modal);
    setModalTask("");
  };

  const toggleForm = () => {
    setForm(!form);
  };

  return (
    <div className="task-list-section">
      {!modal ? (
        <ul className="task-list">
          <h3 className="title">Tasks</h3>
          {notes.map((note) => (
            <Task activateModal={activateModal} key={note.id} note={note} />
          ))}
        </ul>
      ) : (
        <Modal task={modalTask} deActivateModal={deActivateModal} />
      )}
      <div className="widgets-container">
        {!form ? (
          <Widgets userId={userId} toggleForm={toggleForm} />
        ) : (
          <ResourceForm userId={userId} toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default TaskList;
