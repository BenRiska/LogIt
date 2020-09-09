import React, { useEffect, useState } from "react";
import Resource from "./Resource";
import fire from "../fire";

const useResources = (userId) => {
  const [resources, setResources] = useState("");

  useEffect(() => {
    const unSub = fire
      .firestore()
      .collection("resources")
      .where("userId", "==", userId)
      .onSnapshot((snap) => {
        const newResources = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResources(newResources);
      });

    return () => unSub();
  }, [userId]);
  return resources;
};

const Widgets = (props) => {
  const resources = useResources(props.userId);
  console.log(resources);

  return (
    <div className="widgets">
      <h3>Resources</h3>
      <div className="added-layer">
        <ul className="links-container">
          {resources &&
            resources.map((resource) => (
              <Resource key={resource.id} resource={resource} />
            ))}
        </ul>
      </div>
      <div className="widg-btn-con">
        <button className="btn" onClick={props.toggleForm}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Widgets;
