import React from 'react';
import { Button, Container, Typography, TextField } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: 50 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Material UI with React + Vite
      </Typography>
      <TextField label="Enter your name" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      
    </Container>
  );
}

export default App;
