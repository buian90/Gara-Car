import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="pay-count">
      <button onClick={increment}>+</button>
      <input type="number" value={count} min={0} readOnly />
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterApp;
