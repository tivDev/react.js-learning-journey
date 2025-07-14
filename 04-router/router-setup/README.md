# router-setup

A React project demonstrating basic routing setup using React Router.

---

## 📄 What It Demonstrates

- Using `react-router-dom` to add routing  
- Defining routes with `<Routes>` and `<Route>`  
- Navigating between pages with `<Link>`  
- Simple pages for Home and About  

---

## 🧱 Project Structure

```

router-setup/
├── public/
├── src/
│   ├── App.jsx          # Main component with router setup
│   ├── main.jsx         # Entry point wrapping App with BrowserRouter
│   └── pages/
│       ├── Home.jsx     # Home page component
│       └── About.jsx    # About page component
├── index.html
├── package.json
└── vite.config.js

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
npm install react-router-dom
````

### 2. Start the development server

```bash
npm run dev
```

Open your browser at the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🧠 Code Overview

### `src/main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### `src/App.jsx`

```jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

### `src/pages/Home.jsx`

```jsx
export default function Home() {
  return <h2>Home Page</h2>;
}
```

### `src/pages/About.jsx`

```jsx
export default function About() {
  return <h2>About Page</h2>;
}
```

---

## 🎯 Learning Goals

* Understand React Router basics
* Create simple navigation
* Define routes and route components

