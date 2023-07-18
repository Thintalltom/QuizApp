import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./Firebase";
import {
  
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import { questions } from "../Components/QuizQuestions";
export const userContext = createContext();


export const UserProvider = (props) => {
  // Initialize Firebase Authentication and get a reference to the service
 
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({});
  const [current, setCurrent] = useState((0));
  

  function signUp  (email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  };

  function login (email, password) {
    signInWithEmailAndPassword(auth, email, password);
  };

  function logOut() {
   return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      
     });
      return () => {
        unsubscribe();
      }   
    }, []);

  

  return (
    <userContext.Provider
      value={{
        login,
        user,
        signUp,
        logOut, score, setScore, current,setCurrent, questions
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};

