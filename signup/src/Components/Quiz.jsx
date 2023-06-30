import React, { useContext } from "react";
import { useState } from "react";
import { userContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import { questions } from "./QuizQuestions";

const Quiz = () => {
  const { user, logOut, score, setScore } = useContext(userContext);
  const [current, setCurrent] = useState(0);
  const [option, setOption] = useState("");

  const navigate = useNavigate();

  const nextQuestion = () => {
    if (option == questions[current].answer) {
      setCurrent(current + 1);
      setScore(score + 1);
      setTabstate(0)
    } else {
      setCurrent(current + 1);
      setTabstate(0)
    }
  };

  const backQuestion = () => {
    setCurrent(current - 1);
  };
  const finishQuiz = () => {
    if (option == questions[current].answer) {
      setScore(score + 1);
    }
    navigate("/score");
  };

  const [tabstate, setTabstate] = useState(0);

  const action = (index) => {
    
    setTabstate(index);
  };

  return (
    <div className="text-center  items-center justify-center bg-slate-300 flex flex-col h-[100vh]">
      <p>email: {user && user.email}</p>
      <div className="text-center p-4 items-center justify-center flex flex-col bg-slate-300 w-[50vw] h-[50vh]">
        <p className="mb-4 font-medium ">QUIZ QUESTIONS</p>
        <div className="bg-white p-[20px] w-[50vw]">
          {questions[current].question}
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div
            onClick={() => action(1)}
            className={`${
              tabstate === 1
                ? " p-[10px] w-[30vw] rounded text-white  bg-red-900"
                : "bg-white p-[10px] w-[30vw] rounded "
            }`}
          >
            <button onClick={() => setOption("A")}>
              {questions[current].optionA}
            </button>
          </div>
          <div
            onClick={() => action(2)}
            className={`${
              tabstate ===  2
                ? " p-[10px] w-[30vw] rounded text-white  bg-red-900"
                : "bg-white p-[10px] w-[30vw] rounded "
            }`}
          >
            <button onClick={() => setOption("B")}>
              {questions[current].optionB}
            </button>
          </div>
          <div
            onClick={() => action(3)}
            className={`${
              tabstate === 3
                ? " p-[10px] w-[30vw] rounded text-white  bg-red-900"
                : "bg-white p-[10px] w-[30vw] rounded "
            }`}
          >
            <button onClick={() => setOption("C")}>
              {questions[current].optionC}
            </button>
          </div>
        </div>
      </div>

      {current == questions.length - 1 ? (
        <button
          className="p-4 bg-slate-500 text-white  rounded "
          onClick={finishQuiz}
        >
          {" "}
          finish quiz{" "}
        </button>
      ) : (
        <div>
          {current > 0 ? (
            <div className="flex gap-9">
              <button
                className="p-2 bg-slate-500 text-white  rounded "
                onClick={backQuestion}
              >
                Back
              </button>
              <button
                className="p-2 bg-slate-500 text-white  rounded "
                onClick={nextQuestion}
              >
                Next
              </button>
            </div>
          ) : (
            <button
              className="p-2 bg-slate-500 text-white  rounded "
              onClick={nextQuestion}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
