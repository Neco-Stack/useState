import { useState } from "react";
import "./counter.css"

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prevCount => prevCount +1);
    const decrement = () => setCount(prevCount => prevCount -1);
    const reset = () => setCount(0);
    
    return (
        <div>
            <h2>Counter</h2>
            <p>Aktueller Wert: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
      );
}

export default Counter;