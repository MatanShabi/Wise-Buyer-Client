import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const { logoutUser, user } = useUser()

  return (
    <AppBar position="static" className='flex w-full'>
      <Toolbar>
        <div className='flex items-center gap-2'>
          <Typography variant="h6" component={Link} to="/">
            Wise Buyer
          </Typography>
          <Typography variant="h6" component={Link} to="/">
            Welcome {user.firstName} {user.lastName} !
          </Typography>
          <Typography variant="h6" component={Link} to="/">
            <Button onClick={logoutUser} color="inherit" component={Link} to="/">
              Logout
            </Button>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
