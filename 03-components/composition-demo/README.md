# composition-demo

A React project demonstrating how to compose and nest components to build complex UIs from smaller, reusable pieces.

---

## 📄 What It Demonstrates

✅ Creating reusable child components  
✅ Passing props to child components  
✅ Rendering multiple child components inside a parent  
✅ Component composition basics  

---

## 🧱 Project Structure

```

06-composition-demo/
├── public/
├── src/
│   ├── App.jsx                  # Parent component rendering Profile components
│   ├── main.jsx                 # App entry point
│   ├── index.css                # Global styles
│   └── components/
│       └── Profile.jsx          # Child component receiving props
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

### `Profile.jsx` (Child Component)

```jsx
export default function Profile({ name, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}
```

### `App.jsx` (Parent Component)

```jsx
import Profile from './components/Profile';

function App() {
  const users = [
    { id: 1, name: 'Tiv', role: 'Web Developer' },
    { id: 2, name: 'Sophea', role: 'Designer' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>06: Composition Demo</h1>

      {users.map(user => (
        <Profile key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default App;
```

---

## 🎯 Learning Goals

* Understand component composition
* Learn to pass props to reusable components
* Build UIs by combining multiple components

