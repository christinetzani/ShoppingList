import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {
  //  Within the same component we can have 2 siloed off states

  // emoji's state
  const [isHappy, setIsHappy] = useState(true);

  // counter's state
  const [count, setCount] = useState(0);

  const toggleIsHappy = () => setIsHappy(!isHappy);

  const incrementCount = () => setCount(count + 2);

  return (
    <div>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😊" : "😭"}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
