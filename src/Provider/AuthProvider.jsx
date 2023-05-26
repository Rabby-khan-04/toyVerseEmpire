import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        console.log("hello");
        const userEmail = {
          email: currentUser?.email,
        };
        console.log(userEmail);
        fetch("http://localhost:3000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            const token = data.token;
            localStorage.setItem("toy-access-token", token);
          });
      } else {
        localStorage.removeItem("toy-access-token");
      }
    });

    return () => unsubscribe();
  }, []);

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    auth,
    user,
    loading,
    googleLogin,
    userSignOut,
    createUser,
    userSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
