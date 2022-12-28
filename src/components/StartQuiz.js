import React, { useContext } from 'react'
import { useState } from 'react'
import Context from '../QuizContext/Context'

const StartQuiz = () => {

  const [HideBtn, setHideBtn] = useState(false);
  const [HidePreBtn, setHidePreBtn] = useState(false);
  const [Ans, setAns] = useState("");
  const { setQuizState, Question, CurrQuestion, setCurrQuestion, setScore, Score } = useContext(Context)

  const CurrectAnsHandler = (Correct) => {
    setHideBtn(true)
    if (Question[CurrQuestion].CorrAns === Correct) {
      setAns(Correct);
      setScore(Score + 1)
    } else {
      alert("Wrong")
    }
  }

  const NaxtBtnHandler = () => {
    setHideBtn(false);
    setCurrQuestion(CurrQuestion + 1)
    setHidePreBtn(true)
  }

  const PreBtnHandler = () => {

    if (!CurrQuestion <= 0) {
      setCurrQuestion(CurrQuestion - 1)
    }else{
      setHidePreBtn(false)
    }
  }

  const FinishHandler = () => {
    if (Question[CurrQuestion].CorrAns === Ans) {
      // setScore(Score + 1);
      setQuizState("EndQuiz")
    }

  }
  return (
    <div className='startContainer'>
      <div className="questionContainer">
        <h2> Q. {Question[CurrQuestion].prompt} ({CurrQuestion} /{Question.length})</h2>
      </div>
      <div className="optionCon">
        <button onClick={() => { CurrectAnsHandler("optionA") }}>{Question[CurrQuestion].optionA}</button>
        <button onClick={() => { CurrectAnsHandler("optionB") }}>{Question[CurrQuestion].optionB}</button>
        <button onClick={() => { CurrectAnsHandler("optionC") }}>{Question[CurrQuestion].optionC}</button>
        <button onClick={() => { CurrectAnsHandler("optionD") }}>{Question[CurrQuestion].optionD}</button>

        <div className="nextBtnCon">
          <button disabled={!HidePreBtn} onClick={() => { PreBtnHandler() }}>Previous</button>
          {CurrQuestion == Question.length - 1 ? <button disabled={!HideBtn} onClick={() => { FinishHandler() }}>Finish</button> : <button disabled={!HideBtn} onClick={() => { NaxtBtnHandler() }}>Next</button>}
        </div>

      </div>
    </div>
  )
}

export default StartQuiz
