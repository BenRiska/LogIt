import React from "react";

function Home(props) {
  const { logOut } = props;
  return (
    <div className="home">
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default Home;
