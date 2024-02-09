import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import PolicyIcon from "@mui/icons-material/Policy";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../api/auth";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();
  const { logoutUser, user } = useUser();
  const handleLogout = async () => {
    try {
      await logout();
      logoutUser();
      navigate('/');
    }
    catch(e) {
      console.log("Falied to logout")
    }
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="/logo.svg"
            style={{
              width: "95px",
              height: "75px",
              marginRight: "5px",
              paddingTop: "5px",
            }}
          />
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Wise-Buyer</p>
        </Typography>

        <div>

        
          <IconButton
            color="inherit"
            component={Link}
            to={`/profile/${user._id}`}
          >
            <AccountBoxIcon />
            <p>Profile</p>
          </IconButton>

          <IconButton color="inherit" component={Link} to="/">
            <MmsRoundedIcon />
            <p>Posts</p>
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
        <IconButton
          onClick={handleLogout}
          color="inherit"
        >
          <LogoutIcon />
          <p>Logout</p>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
