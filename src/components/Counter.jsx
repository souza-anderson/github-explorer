import { useState } from "react";

export function Counter() {

  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={incrementCounter}>Increment</button>
    </div>
  );
}