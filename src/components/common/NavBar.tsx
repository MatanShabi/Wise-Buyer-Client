import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const { logoutUser } = useUser()
  
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/">
          Wise-Buyer
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/aboutus">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/privacypolicy">
            Privacy Policy
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
        </div>
        <Button onClick={logoutUser} color="inherit" component={Link} to="/" sx={{ marginLeft: '20px' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
