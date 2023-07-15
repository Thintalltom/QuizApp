import React, { useContext } from "react";
import { userContext } from "../Context/userContext";
import { Link, useNavigate } from "react-router-dom";
const QuestionInter = () => {
  const { user, current, setCurrent, questions} = useContext(userContext);

  
  return (
    <div className="bg-slate-500 h-[100vh]">
      
        {" "}
        <p className="p-4">Welcome {user && user.email}</p>
     
    <div className="flex items-center justify-center flex-col bg-slate-500 gap-4  h-[100vh]">
    <p className="text-2xl font-extrabold">Pick a subject</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <Link to='/math'>
          <button className="bg-white p-[10px] w-[30vw] cursor-pointer rounded hover:bg-slate-700">Mathematics</button>
          </Link>
         
          <Link to='/quiz'>
          <button className="bg-white p-[10px] w-[30vw] cursor-pointer rounded hover:bg-slate-700"  >English Language</button>   
          </Link>
          
        </div>
    </div>
 
     
    </div>
  );
};

export default QuestionInter;
