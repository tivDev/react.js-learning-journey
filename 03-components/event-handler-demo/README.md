# event-handler-demo

A simple React project that demonstrates how to handle user events like `onClick` and `onChange` using React event handlers and state updates.

This is part of the `03-components` learning series.

---

## 📄 What It Demonstrates

✅ Handling input events with `onChange`  
✅ Handling button clicks with `onClick`  
✅ Using event objects in React  
✅ Updating component state based on user interaction  

---

## 🧱 Project Structure

```

05-event-handler-demo/
├── public/
├── src/
│   ├── App.jsx          # Main component with event handling logic
│   ├── main.jsx         # App entry point
│   ├── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Start the development server

```bash
npm run dev
```

Then open your browser at the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🧠 Code Overview

### `App.jsx`

```jsx
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

      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputText}</p>

      <button onClick={handleButtonClick}>Clicked {count} times</button>
    </div>
  );
}

export default App;
```

---

## 🎯 Learning Goals

* Learn how React handles browser events
* Understand the use of `event` objects in handlers
* Dynamically update component state in response to user actions
* Combine event handlers with `useState` for interactive UIs

