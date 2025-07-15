## ✅ React Query + React

* **Name**: `react-query-api`
* **Library**: [React Query (TanStack)](https://tanstack.com/query/latest)
* **API**: `https://jsonplaceholder.typicode.com/users`

---

## 🛠 Setup Instructions

### 1. **Create the Vite + React project**

```bash
npm create vite@latest react-query-api --template react
cd react-query-api
```

### 2. **Install dependencies**

```bash
npm install
npm install @tanstack/react-query
```

---

## 🧠 React Query Setup Example

Replace `src/App.jsx` with the following:

```jsx
// src/App.jsx
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
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
```

---

### 3. **Set up React Query Provider**

Edit `main.jsx` like this:

```jsx
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
```

---

## ✅ Run the Project

```bash
npm run dev
```

Then visit: [http://localhost:5173](http://localhost:5173)

---

## 📄 README.md

Here's your `README.md` content for this project:

````markdown
# 📦 react-query-api

A React + Vite project using **React Query** to fetch user data from a public REST API.

## 🔧 Tech Stack

- React
- Vite
- React Query (TanStack)
- JSONPlaceholder API

## 🛠 Setup

```bash
npm create vite@latest react-query-api --template react
cd react-query-api
npm install
npm install @tanstack/react-query
npm run dev
````

## 🌐 API Used

* [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

## 📄 File Overview

### App.jsx

```jsx
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
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
```

### main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
```