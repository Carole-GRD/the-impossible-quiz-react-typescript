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
    

    /**
     * Handles the change of the current question based on the button clicked.
     * @param {string} incr - The direction of the question change, either 'next' or 'prev'.
     * @param {MouseEvent<HTMLButtonElement>} e - The mouse event triggered by the button click.
     */
    function handleChangeQuestion(incr: string, e: MouseEvent<HTMLButtonElement>) {
      e.preventDefault();

      // Calculate the new index based on the button click
      const newIndex =
        incr === 'next' ? (index + 1) % (maxIndex + 1) : (index - 1 + maxIndex + 1) % (maxIndex + 1);

      // Update the index and set the current question based on the new index
      setIndex(newIndex);
      setCurrentQuestion(allQuestions[newIndex]);
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
        <button onClick={(e) => handleChangeQuestion("prev", e)}>Previous</button>
        <button onClick={(e) => handleChangeQuestion("next", e)}>Next</button>
        <button onClick={handleHint}>Hint</button>
      </div>
    
  )
}

export default Question