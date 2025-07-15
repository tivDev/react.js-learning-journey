// src/App.jsx
import './App.css'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Zustand CRUD with Vite</h1>
      <ItemForm />
      <ItemList />
    </div>
  )
}

export default App
