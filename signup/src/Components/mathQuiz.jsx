import React,{useContext} from 'react'
import { math } from './Math';
import { userContext } from "../Context/userContext";
const MathQuiz = () => {
    const {  current, setCurrent } = useContext(userContext);
  return (
    <div >
        <div className='flex items-center justify-center bg-slate-400 h-[100vh] '>
            <div>
                <p className='text-2xl  text-center'>QUIZ QUESTION</p>
               {math[current].question}
            </div>
        </div>
        </div>
  )
}

export default MathQuiz