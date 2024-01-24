import React from 'react';
import { Avatar, Button, Container, CssBaseline, TextField, Typography, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, Controller } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { control, handleSubmit } = useForm<LoginForm>();

  const handleLogin = (data: LoginForm) => {
    console.log('Login data:', data);
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" gutterBottom>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Sign In
        </Button>
      </form>
    </Paper>
  </Container>
  );
};

export default Login;
