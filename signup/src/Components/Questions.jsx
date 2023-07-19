import React, { useState, useContext } from "react";
import { userContext } from "../Context/userContext";
import { questions } from "./QuizQuestions";
import { Link, useNavigate } from "react-router-dom";

const Questions = () => {
  const { score, setScore, logOut, setCurrent } = useContext(userContext);
  const Retake = () => {
    setScore(0);
    setCurrent(0)
  };
  const navigate =useNavigate()
  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-slate-500 h-[100vh]">
      <p className="text-2xl text-white font-medium">
        Hurray you have successfullly completed the quiz{" "}
      </p>
      <p className="text-white  font-medium text-xl">
        {" "}
        Score: {score} / {questions.length}
      </p>
      {score > 3 ? (
        <p className="text-blue-900 font-medium text-xl">You did well</p>
      ) : (
        <p className="text-red-700 font-medium text-xl">You can do better</p>
      )}
      <Link to="/quiz">
        <button
          onClick={Retake}
          className="bg-slate-200 p-[10px] rounded  hover:bg-slate-700"
        >
          Retake Quiz
        </button>
      </Link>

      <button
        className="p-4 bg-slate-500 text-white  rounded "
        onClick={handleSignout}
      >
        Logout{" "}
      </button>
    </div>
  );
};

export default Questions;
