import { createContext, useState } from "react";
import { app } from "./Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const userContext = createContext();

export const UserProvider = (props) => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  const [logpassword, setLogPassword] = useState("");
  const [logemail, setLogEmail] = useState("");
  const [loginfo, setLogInfo] = useState([]);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };


  return (
    <userContext.Provider
      value={{
        login,
        setLogPassword,
        setLogEmail,
        logemail,
        logpassword,
        
        signUp,
        setPassword,
        setEmail,
        password,
        email,
        info,
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};
