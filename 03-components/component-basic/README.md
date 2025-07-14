# 01-component-basic

A simple React project demonstrating a basic functional component that renders static JSX.  
This is the first step in learning React component fundamentals.

## 📁 Project Structure

```

01-component-basic/
├── public/
├── src/
│   ├── App.jsx          # Main component rendering static content
│   ├── main.jsx         # Entry point of the app
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js

````

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Run the development server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 📄 What It Does

This project shows a single React component written as a **function** that returns **static JSX** (no props, no state, no events).

### Example:

```jsx
function App() {
  return (
    <div>
      <h1>Hello from Component Basic Demo!</h1>
      <p>This is a simple functional React component rendering static JSX.</p>
    </div>
  );
}
```

* No state (`useState`)
* No props
* No interactivity — just static UI

---

## 🧠 Purpose

* To understand the **basic structure** of a React component.
* To learn how to return JSX.
* To get comfortable with Vite + React project setup.

---
