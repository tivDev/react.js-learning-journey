# 📦 react-axios

A simple React + Vite project that fetches and displays user data using **Axios** from the JSONPlaceholder API.

## 🛠 Setup Instructions

1. **Create the project using Vite**

```bash
npm create vite@latest react-axios --template react
cd react-axios
````

2. **Install dependencies**

```bash
npm install
npm install axios
```

3. **Start the development server**

```bash
npm run dev
```

Open your browser and go to: [http://localhost:5173](http://localhost:5173)

---

## 📡 API Used

This app fetches data from:

```
https://jsonplaceholder.typicode.com/users
```

---

## 📄 Example Code (App.jsx)

```jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div style={{ padding: '1rem' }}>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
```
