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
        username: formData.email.trim(), // assuming you're using username, not email
        password: formData.password.trim()
      });

      const { token, user } = response.data;

      // Save the token to localStorage or sessionStorage
      localStorage.setItem('token', token);

      // Optional: save user info if needed
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');
      // Redirect to a protected route (e.g., /dashboard)
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
        backgroundColor: '#f0f2f5',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Avatar sx={{ backgroundColor: '#1976d2' }}>
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
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={loading}
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
