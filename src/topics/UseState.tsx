import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        className=" bg-emerald-500 px-8 py-3 rounded-md mr-4"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className=" bg-emerald-500 px-8 py-3 rounded-md mr-4"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
