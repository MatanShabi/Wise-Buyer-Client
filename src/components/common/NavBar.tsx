import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
// import Button2 from "@mui/material/Button";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import LogoutIcon from '@mui/icons-material/Logout';

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

          <IconButton color="inherit" component={Link} to="/profile">
            <AccountBoxIcon />
            <p>Profile</p>
          </IconButton>

          <IconButton color="inherit" component={Link} to="/aboutus">
            <InfoIcon />
            <p>About Us</p>
          </IconButton>

          
          <IconButton color="inherit" component={Link} to="/privacypolicy">
            <PolicyIcon />
            <p>Privacy Policy</p>
          </IconButton>

        </div>
        <IconButton color="inherit" component={Link} to="/logout">
            <LogoutIcon />
            <p>Logout</p>
          </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;