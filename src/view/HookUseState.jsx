import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  let count2 = 0;

  const increment = () => {
    count2 += 1;
    setCount(count + 1);
  };

  const decrement = () => {
    count2 -= 1;
    setCount(count - 1);
  };

  return (
    <>
      <h1>Le hook use state</h1>

      <p>count: {count}</p>
      <p>count sans useState: {count2}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default HookUseState;
