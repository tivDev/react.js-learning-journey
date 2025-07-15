// src/components/ItemList.jsx
import { useState } from 'react'
import { useStore } from '../store/useStore'

export default function ItemList() {
  const { items, deleteItem, updateItem } = useStore()
  const [editingId, setEditingId] = useState(null)
  const [newName, setNewName] = useState('')

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '0.5rem' }}>
            {editingId === item.id ? (
              <>
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ marginRight: '0.5rem' }}
                />
                <button
                  onClick={() => {
                    updateItem(item.id, newName)
                    setEditingId(null)
                  }}
                >
                  Save
                </button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ marginRight: '1rem' }}>{item.name}</span>
                <button onClick={() => {
                  setEditingId(item.id)
                  setNewName(item.name)
                }}>
                  Edit
                </button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
