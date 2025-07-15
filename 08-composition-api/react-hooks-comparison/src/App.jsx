import React, { useState, useRef, useReducer } from 'react';

const initialReducerState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialReducerState;
    default:
      return state;
  }
}

export default function App() {
  // useState example
  const [count, setCount] = useState(0);

  // useRef example
  const countRef = useRef(0);

  // useReducer example
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '2rem auto' }}>
      <h1>React Hooks Comparison</h1>

      {/* useState Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>useState</h2>
        <p>State updates cause component re-render.</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      {/* useRef Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>useRef</h2>
        <p>Mutable ref that does NOT cause re-render on update.</p>
        <p>Current countRef: {countRef.current}</p>
        <button onClick={() => { countRef.current += 1; alert(`countRef is now ${countRef.current}`); }}>
          Increment countRef and alert value
        </button>
        <button onClick={() => { countRef.current = 0; alert('countRef reset to 0'); }}>
          Reset countRef and alert value
        </button>
        <p><em>Note: Updating countRef won’t update the UI automatically.</em></p>
      </section>

      {/* useReducer Section */}
      <section>
        <h2>useReducer</h2>
        <p>Good for complex state logic or multiple related state updates.</p>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </section>
    </div>
  );
}
