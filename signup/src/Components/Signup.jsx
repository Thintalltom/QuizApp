import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context/userContext";
import { toast } from "react-toastify";
const Signup = () => {
  const { signUp, error } = useContext(userContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signUp(email, password)
      .then(() => {
        //if error is equal to all this params display error
        if (error == "auth/invalid-email" || "auth/email-already-in-use") {
          toast.error(error);
        } else if (!error) {
          //if no error navigate to login
          navigate("/login");
        }
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="w-[100vw] h-[100vh] flex-col flex  items-center justify-center bg-slate-500">
      <p className="text-4xl font-extrabold mb-4">QUIZ APP</p>
      <p className="text-slate-200 mb-4 font-bold">Register Account</p>
      <div className="text-slate-200 flex  items-center justify-center">
        <form className="flex flex-col gap-9" onSubmit={handleSignup}>
          <label>Gmail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="input here "
            className=' xs:w-[80vw] sm:w-[50vw] text-slate-900 border-black border-2 p-[5px] rounded '
          />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="input here "
            className=' xs:w-[80vw] sm:w-[50vw] text-slate-900  border-black border-2 p-[5px] rounded'
          />
          <button
            type="submit"
            className=' text-white bg-slate-900 rounded sm:w-[50vw] xs:w-[80vw] p-[10px]'
          >
            Sign up
          </button>
          <p className="text-center">
            already registered?{" "}
            <Link
              to="/login"
              className="text-blue-900 cursor-pointer font-bold"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
