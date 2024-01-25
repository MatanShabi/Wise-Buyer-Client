import React from 'react';
import { Button, Container, TextField, Typography, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { SignupData } from '../../types';
import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';


const Signup: React.FC = () => {
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm<SignupData>();

    const handleSignup = async (data: SignupData) => {
        try {
            const response = await register(data)
            if (!response.ok) {
                // TODO: display error in the screen
                throw Error(`Error: ${response.status} - ${response.statusText}`);
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
                        render={({ field }) => (
                            <TextField label="First Name" variant="outlined" fullWidth margin="normal" {...field} />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField label="Last Name" variant="outlined" fullWidth margin="normal" {...field} />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField label="Email" variant="outlined" fullWidth margin="normal" {...field} />
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Signup
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Signup;
