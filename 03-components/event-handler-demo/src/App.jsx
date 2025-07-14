import './App.css'
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>05: Event Handler Demo</h1>

      {/* onChange event */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputText}</p>

      {/* onClick event */}
      <button onClick={handleButtonClick}>Clicked {count} times</button>
    </div>
  );
}

export default App;

