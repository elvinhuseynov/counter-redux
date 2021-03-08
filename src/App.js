import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
