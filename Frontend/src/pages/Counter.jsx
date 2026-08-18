import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count => count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count => count - 1);
  return (
    <div className="counter">
      <span>{count}</span>
      <div className="counterButtons">
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
