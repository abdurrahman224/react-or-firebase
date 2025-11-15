import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import auth from "../../Firabase/Firabase-init";
import { useState } from "react";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth).then((result) => {
      setUser(result);
    });
  };

  return (
<div className="block p-10 max-w-auto max-h-[350px] shadow-2xl mt-10">

      {user ? (
        <button
          onClick={handleGoogleSignOut}
          className="bg-green-500 text-white rounded-2xl px-8 py-2"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={handleGoogleSignIn}
          className="bg-green-500 text-white rounded-2xl px-8 py-2"
        >
          Login with Google
        </button>
      )}

      {user && (
        <div className="pt-6">
          <h2 className="text-xl font-semibold">User Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>

          <img
            className="rounded-full w-24 h-24 mt-3 border-2 border-green-500"
            src={user.photoURL}
            alt="User"
          />
        </div>
      )}
    </div>

  );
};

export default Login;
