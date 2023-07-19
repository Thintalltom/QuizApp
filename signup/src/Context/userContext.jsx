import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./Firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { questions } from "../Components/QuizQuestions";
export const userContext = createContext();

export const UserProvider = (props) => {
  // Initialize Firebase Authentication and get a reference to the service

  const [score, setScore] = useState(0);
  const [user, setUser] = useState({});
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState({});
  const [logError, setLogError] = useState({});

  function signUp(email, password) {
    //return the function
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    //return the function
    return signInWithEmailAndPassword(auth, email, password);
  };

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userContext.Provider
      value={{
        logError,
        error,
        login,
        user,
        signUp,
        logOut,
        score,
        setScore,
        current,
        setCurrent,
        questions,
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};
