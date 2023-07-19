import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { userContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { user, logOut, score, setScore, current, setCurrent, questions } =
    useContext(userContext);

  const [option, setOption] = useState("");
  

  const navigate = useNavigate();

  const nextQuestion = () => {
    if (option == questions[current].answer) {
      setCurrent(current + 1);
      setScore(score + 1);
      setTabstate(0);
    } else {
      setCurrent(current + 1);
      setTabstate(0);
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
    <div className="text-center  items-center justify-center bg-slate-400 flex flex-col h-[100vh]">
      <div className="text-center p-4 items-center justify-center flex flex-col  w-[50vw] h-[50vh]">
        <p className="mb-[20px] font-medium text-xl xs:text-sm">QUIZ QUESTIONS</p>
        <div className="bg-slate-400  p-[20px] w-[50vw] text-xl xs: text-sm">
          {questions[current].question}
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div
            onClick={() => action(1)}
            className={`${
              tabstate === 1
                ? " p-[10px] w-[30vw] rounded text-white  bg-red-900 xs:w-[50vw] xs:text-sm"
                : "bg-white p-[10px] w-[30vw] rounded cursor-pointer xs:w-[50vw] xs:text-sm hover:bg-slate-700"
            }`}
          >
            <button onClick={() => setOption("A")}>
              {questions[current].optionA}
            </button>
          </div>
          <div
            onClick={() => action(2)}
            className={`${
              tabstate === 2
                ? " p-[10px] w-[30vw] rounded text-white  xs:w-[50vw] xs:text-sm bg-red-900"
                : "bg-white p-[10px] w-[30vw] cursor-pointer rounded  xs:w-[50vw] xs:text-sm hover:bg-slate-700"
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
                ? " p-[10px] w-[30vw] rounded text-white  xs:w-[50vw] xs:text-sm  bg-red-900"
                : "bg-white p-[10px] w-[30vw] rounded  xs:w-[50vw] xs:text-sm cursor-pointer hover:bg-slate-700"
            }`}
          >
            <button onClick={() => setOption("C")}>
              {questions[current].optionC}
            </button>
          </div>

          <div
            onClick={() => action(4)}
            className={`${
              tabstate === 4
                ? " p-[10px] w-[30vw] rounded text-white xs:w-[50vw] xs:text-sm  bg-red-900"
                : "bg-white p-[10px] w-[30vw] rounded  xs:w-[50vw] xs:text-sm cursor-pointer hover:bg-slate-700"
            }`}
          >
            <button onClick={() => setOption("D")}>
              {questions[current].optionD}
            </button>
          </div>
        </div>
      </div>

      {current === questions.length - 1 ? (
        <button
          className="p-4 bg-slate-500 text-white  rounded "
          onClick={finishQuiz}
        >
          {" "}
          finish quiz{" "}
        </button>
      ) : (
        <div className="xs:mt-[50px]">
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
      <div className="flex gap-4  mt-4">
        <button
          onClick={(e) => {
            setCurrent(0);
          }}
          className="p-2 bg-slate-500 text-white  "
        >
          1
        </button>
        <button
          onClick={(e) => {
            setCurrent(1);
          }}
          className="p-2 bg-slate-500 text-white  "
        >
          2
        </button>
        <button
          onClick={(e) => {
            setCurrent(2);
          }}
          className="p-2 bg-slate-500 text-white  "
        >
          3
        </button>
        <button
          onClick={(e) => {
            setCurrent(3);
          }}
          className="p-2 bg-slate-500 text-white  "
        >
          4
        </button>
        <button
          onClick={(e) => {
            setCurrent(4);
          }}
          className="p-2 bg-slate-500 text-white  "
        >
          5
        </button>
       
      </div>
    </div>
  );
};

export default Quiz;
