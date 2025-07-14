# state-demo

A simple React project that demonstrates how to use the `useState` hook to manage state in a functional component.

This is part of the `03-components` learning series.

---

## 📄 What Is State in React?

**State** is a built-in object in React components used to store dynamic values that affect what is rendered on the screen.

In a **functional component**, React provides the `useState` hook to manage state.

- When state changes, the component **re-renders** to reflect the updated UI.
- State is **local** to the component unless passed down via props.

---

## ✅ What This Demo Covers

- Using the `useState` hook
- Updating state with `setState` (via `setCount`)
- Re-rendering the component when state changes
- Basic click event handling

---

## 🧱 Project Structure

```

04-state-demo/
├── public/
├── src/
│   ├── App.jsx          # Main component with state logic
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
```

* `useState(0)` initializes the state `count` with value `0`.
* `setCount` is used to update the `count`.
* When the button is clicked, `setCount(count + 1)` increments the count.
* React re-renders the component every time state is updated.

---

## 🎯 Learning Goals

* Understand what state is in React
* Learn how to use `useState` to manage dynamic values
* Practice re-rendering based on state changes
* Improve interaction handling using state updates
