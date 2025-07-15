# 📱 Vite + React + Zustand CRUD

A simple React + Zustand app, built with Vite for fast performance.  
Includes full CRUD functionality with in-memory state (no backend).

---

## ✨ Features

- ⚡ Vite + React for instant hot reload  
- 🧠 Zustand for global state management  
- ✅ CRUD operations (Add, Edit, Delete)  

---

## 📦 Technologies

- [Vite](https://vitejs.dev/)  
- [React](https://react.dev/)  
- [Zustand](https://zustand-demo.pmnd.rs/)  
- CSS (inline + global)  

---

## 🚀 Getting Started

You can either clone this repo or create your own project by running:

```bash
npm create vite@latest zustand-store -- --template react
cd zustand-store
npm install
npm install zustand
npm run dev
````

Then open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── ItemForm.jsx      # Form to add new items
│   └── ItemList.jsx      # List, edit, delete items
├── store/
│   └── useStore.js       # Zustand store for state
├── App.jsx               # Main app layout
├── main.jsx              # App entry point
└── index.css             # Global iOS-like styles
```