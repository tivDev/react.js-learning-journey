import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to My Custom Vite React App!</h1>
      <p>This is a simple app modified for your learning journey.</p>
      <button className="custom-button" onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
    </div>
  )
}

export default App
