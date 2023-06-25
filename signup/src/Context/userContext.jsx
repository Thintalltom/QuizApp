import { createContext, useState, useEffect, useContext } from "react";
import { app } from "./Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

export const userContext = createContext();

export const UserProvider = (props) => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
   return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log(user)
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
        logOut
        
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(userContext)
}
