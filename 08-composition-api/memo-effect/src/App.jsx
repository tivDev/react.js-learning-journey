import { useState } from 'react';
import ExpensiveCalculation from './components/ExpensiveCalculation';
import CounterWithEffect from './components/CounterWithEffect';

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React: useMemo vs useEffect</h1>

      <div style={{ marginBottom: '2rem' }}>
        <label>
          Enter a number:{' '}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
        </label>
        <ExpensiveCalculation number={number} />
      </div>

      <CounterWithEffect />
    </div>
  );
}

export default App;
