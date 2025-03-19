import { useEffect, useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

function App() {
  const [answer, setAnswer] = useState("");
  const [expression, setExpression] = useState("")

  useEffect(() => {
    if (/[+-/*]/.test(expression.split("").pop())) return;
    if (expression === "0") return;
    if (expression === answer)return;
    setAnswer(evaluate(expression))
     return() => {
       
     }
   }, [expression])

   const lastOperator = (exp) => {
     let lastIndex = -1;
     ["+", "-", "/", "*"].forEach((op) => {
      const index = exp.lastIndexOf(op);
      if (index > lastIndex) {
        lastIndex = index
      }
     })
     return lastIndex
   }

   const lastPercent = (exp) => {
    const lastNumberMatch = exp.match(/-?\d+(\.\d+)?$/);
    const lastNumber = lastNumberMatch[0];
    const lastNumberIndex = lastNumberMatch.index; 
    const calculatedNumber = parseFloat(lastNumber) / 100;
    const newExpression = expression.slice(0, lastNumberIndex) + calculatedNumber;
    setExpression(newExpression)
   }

  const pressedButton = (button) => {

    switch (button){
      case "clear":
        setExpression("0");
        setAnswer("");
      break;
      case "=":
        if (/[+-/*]/.test(expression.split("").pop())) return;
        if (expression === "0") return;
        setAnswer(evaluate(expression))
        setTimeout(() => {
          setExpression(answer.toString());
        }, 5)
      break;
      case "negetive": 
        if (expression === "" || expression === "0") return;
        setExpression(expression.toString().charAt(0) === "-" ? expression.slice(1) : "-" + expression)
      break;
      case "percent":
        if (expression === "") return;
        if (/[+-/*]/.test(expression.split("").pop())) return;
        if (expression[lastOperator(expression)]) {
          lastPercent(expression)
        }
        else {
          setExpression((parseFloat(expression.split(/[/+*-]/).pop()) / 100).toString());
        }
      break;
      case "0":
        if(expression === "0") return;
        if (expression.split(/[/+*-]/g).pop() === "0") return;
        setExpression(expression + "0")
      break;
      case ".":
        // to see if the last character is a number
        if (!expression.split(/[/*+-]/g).pop()) return;
        else if(expression.split(/[*/+-]/g).pop().includes(".")) return;
        setExpression(expression + ".")
      break;
      case "backspace":
        setExpression(expression.slice(0, -1))
        if (expression.slice(0, -1).split("").length === 0) setExpression("0")
      break;
      case "-":
        if (expression.charAt(expression.length - 1) === "+") {
        setExpression(expression.slice(0, -1) + button)
        }
        else {
          setExpression(expression + button)
        }
      break
      case "+":
        if (expression.charAt(expression.length - 1) === "-") {
          setExpression(expression.slice(0, -1) + button)
          }
          else {
            setExpression(expression + button)
          }
      break;
      case "/": 
        if (expression.charAt(expression.length - 1) === "*") {
          setExpression(expression.slice(0, -1) + button)
          }
          else {
            setExpression(expression + button)
          }
      break
      case "*":
        if (expression.charAt(expression.length - 1) === "/") {
          setExpression(expression.slice(0, -1) + button)
          }
          else {
            setExpression(expression + button)
          }
      break
      default:
        if (expression.charAt(0) === "0" && expression === "0") {
          setExpression(expression.slice(1) + button)
        } 
        else if (expression.split(/[/+*-]/g).pop() === "0") {
          setExpression(expression.slice(0, -1) + button)
        }
        else {
          setExpression(expression + button)
        }
      } 
  }


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="expression" id="display">{expression}</div>
          <div className="answer">{answer}</div>
        </div>
        <div className="buttons-container">
          <button onClick={() => pressedButton("clear")} className="red-button" id="clear">AC</button>
          <button onClick={() => pressedButton("negetive")} className="silver-button" id="negetive">+/-</button>
          <button onClick={() => pressedButton("percent")} className="silver-button" id="percent">%</button>
          <button onClick={() => pressedButton("/")} className="silver-button" id="divide">/</button>
          <button onClick={() => pressedButton("*")} className="silver-button" id="multiply">*</button>
          <button onClick={() => pressedButton("-")} className="silver-button" id="subtract">-</button>
          <button onClick={() => pressedButton("+")} className="silver-button" id="add">+</button>
          <button onClick={() => pressedButton("=")} className="blue-button" id="equals">=</button>
          <button onClick={() => pressedButton("backspace")} className="gray-button" id="backspace">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6"/>
            </svg>
          </button>
          <button onClick={() => pressedButton(".")} className="gray-button" id="decimal">.</button>
          <button onClick={() => pressedButton("0")} className="gray-button" id="zero">0</button>
          <button onClick={() => pressedButton("1")} className="gray-button" id="one">1</button>
          <button onClick={() => pressedButton("2")} className="gray-button" id="two">2</button>
          <button onClick={() => pressedButton("3")} className="gray-button" id="three">3</button>
          <button onClick={() => pressedButton("4")} className="gray-button" id="four">4</button>
          <button onClick={() => pressedButton("5")} className="gray-button" id="five">5</button>
          <button onClick={() => pressedButton("6")} className="gray-button" id="six">6</button>
          <button onClick={() => pressedButton("7")} className="gray-button" id="seven">7</button>
          <button onClick={() => pressedButton("8")} className="gray-button" id="eight">8</button>
          <button onClick={() => pressedButton("9")} className="gray-button" id="nine">9</button>
        </div>
      </div>
    </>
  )
}

export default App
