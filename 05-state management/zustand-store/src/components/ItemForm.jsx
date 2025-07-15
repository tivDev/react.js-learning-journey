// src/components/ItemForm.jsx
import { useState } from 'react'
import { useStore } from '../store/useStore'

export default function ItemForm() {
  const [name, setName] = useState('')
  const addItem = useStore((state) => state.addItem)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    addItem(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <button type="submit">Add</button>
    </form>
  )
}
