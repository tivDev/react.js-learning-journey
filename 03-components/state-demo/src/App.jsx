import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>04: State Demo</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
