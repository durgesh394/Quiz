import React from 'react'
import Context from "../QuizContext/Context";
import { useContext } from 'react';
const EndQuiz = () => {
const {name , Score ,setQuizState} = useContext(Context)


const HomeHandler = () =>{
  setQuizState("menu")

}
  return (
    <div className='endQuizCon'>
      <h1>{name} your Score is : {Score}</h1>
      <button onClick={()=>{HomeHandler()}}>Home</button>
    </div>
  )
}

export default EndQuiz
