import Calc from "./Calc";
import React, { useState } from 'react';
import './style.css';

function App() {
  const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [result, setResult] = useState('');

const handleInputChange = (e, inputType) => {
  const value = e.target.value;
  if (inputType === 'input1') {
    setInput1(value);
  } else {
    setInput2(value);
  }
};

const handleOperation = (operation) => {
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  if (isNaN(num1) || isNaN(num2)) {
    setResult('Invalid input');
    return;
  }

  switch (operation) {
    case '+':
      setResult(num1 + num2);
      break;
    case '-':
      setResult(num1 - num2);
      break;
    case '*':
      setResult(num1 * num2);
      break;
    case '/':
      if (num2 === 0) {
        setResult('Division by zero');
      } else {
        setResult(num1 / num2);
      }
      break;
    case 'sqrt':
      setResult(Math.sqrt(num1));
      break;
    case 'pow':
      setResult(Math.pow(num1, num2));
      break;
    default:
      setResult('Invalid operation');
      break;
  }
};

  return (
    <div class='calc'>
    <div class="App">
      <h1 class='one-h1'>Calculator</h1>
      <div>
        <input class='inp' type="text" value={input1} onChange={(e) => handleInputChange(e, 'input1')} />
        <input class='inp' type="text" value={input2} onChange={(e) => handleInputChange(e, 'input2')} />
      </div>
      <div>
        <button class='btn' id='btn1' onClick={() => handleOperation('+')}>+</button>
        <button class='btn' id='btn2' onClick={() => handleOperation('-')}>-</button>
        <button class='btn' id='btn3' onClick={() => handleOperation('*')}>*</button>
        <button class='btn' id='btn4' onClick={() => handleOperation('/')}>/</button>
        <button class='btn' id='btn5' onClick={() => handleOperation('sqrt')}>√</button>
        <button class='btn' id='btn6' onClick={() => handleOperation('pow')}>^</button>
          
      </div>
      <div>
        <p class='result'>ответ: {result}</p>
      </div>
    </div>
    </div>
  );
}
  

export default App;