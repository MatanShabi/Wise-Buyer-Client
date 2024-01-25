import React from 'react';
import { Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState } = useForm<LoginForm>();

  const handleLogin = (data: LoginForm) => {
    console.log('Login data:', data);
  };

  const handleSignup = () => {
    navigate('/signup')
  }

  return (
    <Container maxWidth="xs">
    <Paper elevation={3} sx={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
        <img src='src/assets/logo.svg' alt='Logo' className='w-28' />      
      <Typography component="h1" variant="h5" gutterBottom>
        Wise Buyer
      </Typography>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password is required',
          }}
          render={({ field }) => (
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!formState.errors.password}
              helperText={formState.errors.password?.message}
              {...field}
            />
          )}
        />
        <div className='flex flex-row gap-1'>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Login
        </Button>
        <Button onClick={handleSignup} type="submit" variant="contained" color="secondary" fullWidth sx={{ marginTop: 2 }}>
          Sign Up
        </Button>
        </div>
      </form>
    </Paper>
  </Container>
  );
};

export default Login;
