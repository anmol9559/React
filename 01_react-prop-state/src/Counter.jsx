import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Count is {count}
      </h1>
      <button className="bg-blue-700 text-white p-2 rounded"
        onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
