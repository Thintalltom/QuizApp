import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context/userContext";
import { toast } from "react-toastify";
const Login = () => {
  const { login, logError } = useContext(userContext);
  const navigate = useNavigate();

  const [logpassword, setLogPassword] = useState("");
  const [logemail, setLogEmail] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();
  try {
    await login(logemail, logpassword)
    navigate("/inter");
    toast.success('user logged in')
  } catch (err) {
    console.log(err);
        toast.error(err.message)
  }
      
  }
  return (
    <div>
      <div className="w-[100vw] h-[100vh] flex-col flex  items-center justify-center bg-slate-500">
        <p className="text-4xl font-extrabold mb-4">QUIZ APP</p>
        <p className="text-slate-200 mb-4 font-bold">Login Account</p>
        <div className="text-slate-200 flex  items-center justify-center">
          <form className="flex flex-col gap-9">
            <label>Gmail</label>
            <input
              onChange={(e) => setLogEmail(e.target.value)}
              value={logemail}
              type="text"
              placeholder="input here "
              className=" xs:w-[80vw] sm:w-[50vw] text-slate-900 border-black border-2 p-[5px] rounded "
            />
            <label>Password</label>
            <input
              onChange={(e) => setLogPassword(e.target.value)}
              value={logpassword}
              type="text"
              placeholder="input here "
              className=" xs:w-[80vw] sm:w-[50vw] text-slate-900  border-black border-2 p-[5px] rounded"
            />
            <button
              onClick={handleLogin}
              className=" text-white bg-slate-900 rounded sm:w-[50vw] xs:w-[80vw] p-[10px]"
            >
              Login
            </button>
            <p className="text-center ">
              Dont have an account?{" "}
              <Link to="/" className="text-blue-900 cursor-pointer font-bold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
