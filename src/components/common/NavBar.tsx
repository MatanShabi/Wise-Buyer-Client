import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const { logoutUser } = useUser()
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/">
          Wise Buyer
        </Typography>
        {/* TODO: connect logout also to server */}
        <Button onClick={logoutUser} color="inherit" component={Link} to="/">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
