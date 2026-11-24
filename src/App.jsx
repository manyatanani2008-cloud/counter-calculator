
import React, { useState } from "react";

function App() {

  // Counter using state
  const [count, setCount] = useState(0);

  // Calculator using state
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    let a = Number(num1);
    let b = Number(num2);

    switch (operator) {
      case "+":
        setResult(a + b);
        break;

      case "-":
        setResult(a - b);
        break;

      case "*":
        setResult(a * b);
        break;

      case "/":
        setResult(b === 0 ? "Cannot divide by zero" : a / b);
        break;

      default:
        setResult("");
    }
  };

  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>

      <h2>Result: {result}</h2>

    </div>
  );
}

export default App;
