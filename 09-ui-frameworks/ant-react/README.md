# 🐜 React + Vite + Ant Design (AntD)

This project uses:

- ⚛️ [React](https://reactjs.org/) — A JavaScript library for building user interfaces
- ⚡ [Vite](https://vitejs.dev/) — Next Generation Frontend Tooling
- 🐜 [Ant Design](https://ant.design/) — A modern enterprise-level UI design language and React component library

---

## 🚀 Getting Started

### 1. Create the project

```bash
npm create vite@latest ant-react -- --template react
cd ant-react
````

### 2. Install dependencies

```bash
npm install
npm install antd
```

### 3. Import Ant Design styles

In `src/main.jsx`:

```js
import 'antd/dist/reset.css';
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Example Code (App.jsx)

```jsx
import React from 'react';
import { Button, DatePicker, Input, Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Title level={2}>Welcome to Ant Design with React + Vite</Title>
      <Input placeholder="Enter your name" style={{ marginBottom: 16 }} />
      <DatePicker style={{ marginBottom: 16, display: 'block' }} />
      <Button type="primary">Submit</Button>
    </div>
  );
}

export default App;
```

---

## 📁 Folder Structure

```
ant-react/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔗 Useful Resources

* 📘 React Docs: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
* 🐜 Ant Design Docs: [https://ant.design/components/overview/](https://ant.design/components/overview/)
* ⚡ Vite Docs: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

---