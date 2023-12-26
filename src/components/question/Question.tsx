import { useState, MouseEvent, useContext } from 'react';
import { LiveContext } from "../../context/LiveContext"
import allQuestions from '../../data/questions.json'
import './question.css'

const Question = () => {

  const {decrementLive} = useContext(LiveContext) as { decrementLive: () => void };

    const maxIndex: number = 9;
    const [index, setIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
    const [hint, setHint] = useState(false);
    
    
    function handleNextQuestion(e: MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      setHint(false);
      if (index < maxIndex) {
        setIndex((prevIndex) => {
          setCurrentQuestion(allQuestions[prevIndex + 1]);
          return prevIndex + 1;
        });
      } else {
        setIndex(0);
        setCurrentQuestion(allQuestions[0]);
      }
    }
  
    function handleHint() {
      setHint(true);
      decrementLive();
    }

    
  return (
   
      <div className="input-group">
          
        {!hint ? (
          <>
            <label htmlFor={currentQuestion.question}>{currentQuestion.question}</label>
            <input id={currentQuestion.question} type="text" />
          </>
        ) : (
          <>
            <label htmlFor={currentQuestion.question}>{currentQuestion.question}</label>
            <input id={currentQuestion.question} type="text" className="input-hidden" />
              {currentQuestion.possible_answers.map((proposition, index) => (
                  <div key={`${currentQuestion.question}_${index}`}>
                      <input 
                        id={`${index}`} 
                        type="checkbox"
                        // onChange={() => handleCheckboxChange(proposition)} 
                      />
                      <label htmlFor={`${index}`}>{proposition}</label>
                  </div>
              ))}
          </>
        )}  
        <button onClick={handleNextQuestion}>Next</button>
        <button onClick={handleHint}>Hint</button>
      </div>
    
  )
}

export default Question