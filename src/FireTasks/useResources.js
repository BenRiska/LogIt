import { useState, useEffect } from "react";
import fire from "firebase";

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

export default useResources;
