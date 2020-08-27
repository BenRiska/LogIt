import React, { useState } from "react";

function Entry() {
  const [logIn, setLogin] = useState(false);
  return (
    <div className="entry">
      <button onClick={(e) => setLogin(!logIn)}>
        {logIn ? "Sign Up" : "Log In"}
      </button>
      {!logIn ? (
        <form>
          <h3>Sign Up</h3>
          <label>Name</label>
          <input for="name" type="text" />
          <label>Email</label>
          <input for="email" type="email" />
          <label>Password</label>
          <input for="password" type="password" />
        </form>
      ) : (
        <form>
          <h3>Log In</h3>
          <label>Email</label>
          <input for="email" type="email" />
          <label>Password</label>
          <input for="password" type="password" />
        </form>
      )}
    </div>
  );
}

export default Entry;
