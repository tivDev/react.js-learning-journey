import React from 'react';
import { Button, DatePicker, Input, Typography,Switch } from 'antd';

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
