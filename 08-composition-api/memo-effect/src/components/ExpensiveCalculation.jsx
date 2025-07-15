import { useMemo, useState } from 'react';

function ExpensiveCalculation({ number }) {
  const calculate = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1e9; i++) {} // simulate heavy calculation
    return num * 2;
  };

  const result = useMemo(() => calculate(number), [number]);

  return (
    <div>
      <h3>useMemo Example</h3>
      <p>Input: {number}</p>
      <p>Output (x2): {result}</p>
    </div>
  );
}

export default ExpensiveCalculation;
