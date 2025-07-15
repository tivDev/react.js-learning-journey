// src/store/useStore.js
import { create } from 'zustand'

export const useStore = create((set) => ({
  items: [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
  ],
  addItem: (name) => set((state) => ({
    items: [...state.items, { id: Date.now(), name }]
  })),
  updateItem: (id, name) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, name } : item)
  })),
  deleteItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
}))
