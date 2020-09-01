import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

// fire.firestore().collection("notes").add({
//   title: "Homework",
//   description: "Just Do It!",
//   user: "shfdsljgvfdhjlfg5345",
// });

function Home(props) {
  const { logOut, user } = props;
  return (
    <div className="home">
      <nav className="home-nav">
        <h3>Log It</h3>
        <button onClick={logOut}>Log Out</button>
      </nav>
      <div className="home-content">
        <div className="home-board">
          <TaskForm userId={user.uid} />
        </div>
        <div className="task-section">
          <TaskList userId={user.uid} />
        </div>
      </div>
      <footer>Log It || 2020</footer>
    </div>
  );
}

export default Home;
