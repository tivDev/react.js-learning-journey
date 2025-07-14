# rendering-demo

A React project demonstrating how to render **lists** and use **conditional rendering**.  
This is part of the `03-components` learning series.

---

## 📄 What It Demonstrates

✅ Rendering arrays using `.map()`  
✅ Conditional rendering using `&&`  
✅ Conditional rendering using ternary (`? :`)

---

## 🧱 Project Structure

```

02-rendering-demo/
├── public/
├── src/
│   ├── App.jsx          # Contains the list and conditional rendering logic
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
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

Then open your browser at the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🧠 Code Overview

```jsx
function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const isLoggedIn = true;

  return (
    <div>
      <h1>02: Rendering Demo</h1>

      {/* Ternary conditional */}
      <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>

      {/* AND conditional */}
      {fruits.length > 0 && <h2>Fruit List:</h2>}

      {/* List rendering with .map() */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🎯 Learning Goals

* Understand how JSX supports conditional rendering
* Practice rendering lists dynamically
* Learn how to work with arrays and conditions inside React components

---
