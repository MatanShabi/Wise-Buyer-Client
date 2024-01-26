import React from 'react';
import { Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { SignupData } from '../../types/auth';

const Signup: React.FC = () => {
    const navigate = useNavigate()
    const { control, handleSubmit, formState } = useForm<SignupData>();

    const handleSignup = async (data: SignupData) => {
        try {
            const { status, statusText } = await register(data)
            if (status !== 201) {
                // TODO: display error in the screen
                throw Error(`Error: ${status} - ${statusText}`);
            }
            navigate('/')
        } catch (error) {
            console.error(`Failed to singup, error: ${error}`);
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                <img src='src/assets/logo.svg' alt='Logo' className='w-28' />
                <Typography component="h1" variant="h5" gutterBottom>
                    Wise Buyer
                </Typography>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'First name is required'
                        }}
                        render={({ field }) => (
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!formState.errors.firstName}
                                helperText={formState.errors.firstName?.message}
                                {...field} />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Last name is required'
                        }}
                        render={({ field }) => (
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!formState.errors.lastName}
                                helperText={formState.errors.lastName?.message}
                                {...field} />
                        )}
                    />
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
                                {...field} />
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Signup
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Signup;
