# React Hooks Comparison

This project demonstrates the differences and use cases of three important React hooks:

- `useState` — for state that triggers re-render on updates
- `useRef` — for mutable values that persist without causing re-renders
- `useReducer` — for complex state logic using reducer pattern

## Project Setup

### 1. Clone the repository or download the source code

```bash
cd react-hooks-comparison
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open the app

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## How to Use

* The **useState** section shows state updates with automatic UI re-render.
* The **useRef** section shows a mutable value that doesn’t trigger UI updates automatically. Use the alert button to see current value.
* The **useReducer** section shows a more complex state management pattern with actions dispatched to a reducer.

## Technologies

* React 18
* Vite
* JavaScript (ES6+)

