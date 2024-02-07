import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import { IUser } from "../../types/auth";
import { userUpdatePut } from "../../api/user";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Card,
  Box,
  Stack,
  Divider,
  Typography,
} from "@mui/material";

const ProfileInfo: React.FC = () => {
  const { user, updateUser } = useUser();
  const [open, setOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<IUser>({ ...user });

  const userPictureUrl = user.pictureUrl;

  const handleEditNameClose = () => {
    setOpen(false);
  };

  const handleEditNameOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    userUpdatePut(updatedUser);
    updateUser(updatedUser);
    handleEditNameClose();
    window.location.reload();
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      firstName: event.target.value,
    }));
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      lastName: event.target.value,
    }));
  };

  return (
    <div
      className="user-profile"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card variant="outlined" sx={{ maxWidth: 500, minWidth: 360 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={userPictureUrl}
            alt="User"
            sx={{ width: 100, height: 100, margin: "10px" }}
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              gutterBottom
              sx={{ fontSize: "1.5rem" }}
              component="div"
              align="center"
            >
              {user.firstName} {user.lastName}'s Profile
            </Typography>
          </Stack>
        </Box>
        <Divider />

        <Box sx={{ p: 2 }}>
          <Typography gutterBottom sx={{ display: "flex", gap: "30px" }}>
            <Button onClick={handleEditNameOpen} variant="contained">edit Name</Button>

            <Button  variant="contained" style={{ backgroundColor: "gray" }}>
              edit Profile Picture
            </Button>
          </Typography>
        </Box>
      </Card>

      <Dialog open={open} onClose={handleEditNameClose}>
        <DialogTitle>Edit Name</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your new name:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            value={updatedUser.firstName} // Use updatedUser state value
            onChange={handleFirstNameChange} // Handle first name change
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={updatedUser.lastName} // Use updatedUser state value
            onChange={handleLastNameChange} // Handle last name change
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditNameClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileInfo;
