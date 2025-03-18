import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="expression">hello world</div>
          <div className="answer">hello world 2</div>
        </div>
        <div className="buttons-container">
          <button className="red-button" id="clear">AC</button>
          <button className="silver-button" id="negetive">+/-</button>
          <button className="silver-button" id="percent">%</button>
          <button className="silver-button" id="divide">/</button>
          <button className="silver-button" id="multiply">*</button>
          <button className="silver-button" id="subtract">-</button>
          <button className="silver-button" id="add">+</button>
          <button className="blue-button" id="equals">=</button>
          <button className="gray-button" id="backspace">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6"/>
            </svg>
          </button>
          <button className="gray-button" id="decimal">.</button>
          <button className="gray-button" id="zero">0</button>
          <button className="gray-button" id="one">1</button>
          <button className="gray-button" id="two">2</button>
          <button className="gray-button" id="three">3</button>
          <button className="gray-button" id="four">4</button>
          <button className="gray-button" id="five">5</button>
          <button className="gray-button" id="six">6</button>
          <button className="gray-button" id="seven">7</button>
          <button className="gray-button" id="eight">8</button>
          <button className="gray-button" id="nine">9</button>
        </div>
      </div>
    </>
  )
}

export default App
