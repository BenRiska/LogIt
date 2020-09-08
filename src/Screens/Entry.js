import React from "react";

function Entry(props) {
  const {
    setEmail,
    setPassword,
    logIn,
    signUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="entry">
      <div className="entry-content">
        <div className="entry-header">
          <h1>LOG IT</h1>
        </div>
        <p className="slogan">The #1 Task Managing App.</p>
        {!hasAccount ? (
          <form onSubmit={(e) => signUp(e)}>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <div>{emailError}</div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{passwordError}</div>
            <button>Sign Up</button>
            <p>
              Have an account? Log in{" "}
              <span onClick={(e) => setHasAccount(!hasAccount)}>Here</span>
            </p>
          </form>
        ) : (
          <form onSubmit={(e) => logIn(e)}>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <div>{emailError}</div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{passwordError}</div>
            <button>Log In</button>
            <p>
              Don't have an account? Sign up{" "}
              <span onClick={(e) => setHasAccount(!hasAccount)}>Here</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Entry;
