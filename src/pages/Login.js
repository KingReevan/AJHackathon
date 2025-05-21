import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Paper,
  Avatar,
  CircularProgress,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username: formData.email.trim(),
        password: formData.password.trim(),
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');
      window.location.href = '/planner';
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.error || 'Login failed. Please try again.';
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Optional: add a dark overlay for better contrast
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // dark translucent overlay
      zIndex: 1,
    },
  }}
    >
      <Paper
        elevation={6}
        sx={{
      position: 'relative', // to be above the overlay
      zIndex: 2,
      padding: 4,
      width: '100%',
      maxWidth: 400,
      borderRadius: 2,
      boxShadow: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // semi-transparent paper background
    }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Avatar sx={{ backgroundColor: '#ef6812' }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                sx={{
                  color: '#ef6812',
                  '&.Mui-checked': {
                    color: '#ef6812',
                  },
                }}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: '#ef6812',
              color: '#fff',
              marginTop: 2,
              '&:hover': {
                backgroundColor: '#d75e0f',
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
          </Button>
        </form>
        <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
