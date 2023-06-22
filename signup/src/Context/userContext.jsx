import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  const [logpassword, seLogtPassword] = useState("");
  const [logemail, setLogEmail] = useState("");
  const [loginfo, setLogInfo] = useState([]);


  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginEmail = (e) => {
    setLogEmail(e.target.value);
  };

  const loginPassword = (e) => {
    seLogtPassword(e.target.value);
  };

  const getValue = (e) => {
    e.preventDefault();
    setInfo([
      ...info,
      {
        email: email,
        password: password,
      },
    ]);
  };
  {logemail === email && logpassword === password ? <p>welcome </p> : <p>not present</p>}
  const getLogValue = (e) => {

    e.preventDefault();
    if(logemail === email  && logpassword === password) 
    {
     
        console.log('welcome')
    } else{
     
        console.log(' not welcome')
    }
  };

  return (
    <userContext.Provider
      value={{getLogValue, logemail, logpassword, loginPassword, loginEmail, getValue, getEmail, getPassword, password, email, info }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};
