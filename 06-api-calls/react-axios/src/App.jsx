// src/App.jsx
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
