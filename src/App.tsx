import './App.css'
import Title from './components/title/Title'
import Question from './components/question/Question'
import Live from './components/live/Live';

import LiveProvider from './context/LiveContext';

function App() {

  

  return (
    <>
      <Title />
      <LiveProvider>
        <Live />
        <Question />
      </LiveProvider>
    </>
  )
}

export default App
