import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Typography, Container, Paper, Box } from '@mui/material';

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: username,
        password: password
      });
      const { jwt } = response.data;
      localStorage.setItem('jwt', jwt);
      navigate('/admin');
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', marginTop: '20px', maxWidth: '400px' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth style={{ marginTop: '16px' }}>
        Login
      </Button>
      {error && <Typography color="error" style={{ marginTop: '16px' }}>{error}</Typography>}
    </Container>
  );
}

export default Auth;
