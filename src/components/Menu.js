import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Context from '../QuizContext/Context'

const Menu = () => {
  const[username , setusername] = useState("")

  const {setname , quizState, setQuizState , Question , CurrQuestion , setCurrQuestion} = useContext(Context)
  const usernameHandler = (e) =>{
      e.preventDefault();
      setname(username)
      setusername("");
      setQuizState("StartQuiz");
  }
  
  return (
      <form action="" onSubmit={usernameHandler}>
    <div className='menuBtn'>
      
      <input type="text" 
      placeholder='Ex. jonh Deo'
      value={username}
      onChange={(e)=>{setusername(e.target.value)}}
      required
      />
    <button type='submit'>Start Quiz</button>  
    </div>
   </form>
  )
}

export default Menu
