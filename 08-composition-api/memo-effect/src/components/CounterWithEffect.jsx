import { useEffect, useState } from 'react';

function CounterWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  return (
    <div>
      <h3>useEffect Example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default CounterWithEffect;
