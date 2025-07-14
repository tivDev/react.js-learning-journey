# prop-demo

A simple React project that demonstrates how to use **props** to pass data from a parent component to a child component.

This is part of the `03-components` learning series.

---

## 📄 What It Demonstrates

✅ Passing props from parent to child  
✅ Using props to render dynamic content  
✅ Functional component structure with props  

---

## 🧱 Project Structure

```

03-prop-demo/
├── public/
├── src/
│   ├── App.jsx                  # Parent component
│   ├── main.jsx                 # App entry point
│   ├── index.css                # Global styles
│   └── components/
│       └── Greeting.jsx         # Child component receiving props
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

### 2. Run the development server

```bash
npm run dev
```

Open your browser at the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🧠 Code Overview

### `App.jsx` (Parent Component)

```jsx
import Greeting from './components/Greeting';

function App() {
  return (
    <div style={{ padding: '1.5rem' }}>
      <h1>03: Prop Demo</h1>
      <Greeting name="Tiv" />
      <Greeting name="React Student" />
    </div>
  );
}

export default App;
```

### `Greeting.jsx` (Child Component)

```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

export default Greeting;
```

---

## 🎯 Learning Goals

* Understand how to define and use props
* See how components communicate in React
* Learn how to reuse a component with different data

---