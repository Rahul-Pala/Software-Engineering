import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter