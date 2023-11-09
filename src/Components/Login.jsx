import React from "react";
import firebase, { auth } from "../firebase";

const Login = () => {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <h2>Authentication Example</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
