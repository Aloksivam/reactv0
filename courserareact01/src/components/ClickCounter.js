import { useState } from "react";
import React from "react";
function ClickCounter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <hr/>
        <h2>Click this button, i will tell the count</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  
  export default ClickCounter;
  