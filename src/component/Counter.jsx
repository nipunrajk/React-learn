import React, { useState, useReducer } from "react";
import { initialState, counterReducer } from "../CounterReducer";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "Increment" });
  const handleDecrement = () => dispatch({ type: "Decrement " });

  const handleIncrementByAmount = () => {
    dispatch({ type: "IncrementByAmount", payload: +inputValue });
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "DecrementByAmount", payload: +inputValue });
    setInputValue(0);
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <input
          type='number'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract </button>
      </div>
    </div>
  );
}

export default Counter;
