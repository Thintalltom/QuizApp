import React, { useContext } from "react";
import { userContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import { questions } from "./QuizQuestions";
import Questions from "./Questions";

const Quiz = () => {
  const { user, logOut } = useContext(userContext);
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>email: {user && user.email}</p>

    {questions.map((quest) => (
      <Questions question = {quest.question}
      optionA= {quest.optionA}
      optionB= {quest.optionB}
      optionC= {quest.optionC}
      Answer = {quest.answer}
      
      />
    ))}
      





      <button
        className="p-4 bg-slate-500 text-white  rounded "
        onClick={handleSignout}
      >
        Logout{" "}
      </button>
    </div>
  );
};

export default Quiz;
