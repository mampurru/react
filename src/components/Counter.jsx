/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Counter_app(props) {
  const [Counter, setCounter] = useState(props.initialValue);
  
  const increment = () => {
    setCounter(Counter + 1);
  };

  const decrement = () => {
    setCounter(Counter - 1);
  };

  const reset = () => {
    setCounter(props.initialValue);
  }

  

  return (
    <>
      <p>{Counter}</p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
      
    </>
  )
}

export default Counter_app;
