import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log('res: ', res);
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <p>Loading users...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div style={{ padding: '1rem' }}>
      <h1>User List</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App