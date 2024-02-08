import React, { useState } from "react";
import { IUser } from "../../types/auth";
import { userUpdatePut } from "../../api/user";
import { uploadFile } from "../../api/upload";
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

interface MyProfileProps {
  isActiveUserProfile: boolean;
  profileUser: IUser;
  fetchUserPosts: () => void;
}

const Profile: React.FC<MyProfileProps> = ({
  isActiveUserProfile,
  profileUser,
  fetchUserPosts
}) => {
  const [open, setOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<IUser>({ ...profileUser });
  const [displayUser, setDisplayUser] = useState<IUser>({ ...profileUser });
  const handleEditNameClose = () => {
    setOpen(false);
  };

  const handleEditNameOpen = () => {
    setOpen(true);
  };

  const handleSave = async () => {
    const res = await userUpdatePut(updatedUser);
    if (res?.status !== 200) {
      console.error("Failed to update user");
      return
    }
    setDisplayUser(updatedUser);
    setUpdatedUser(updatedUser);
    handleEditNameClose();
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

  const handleProfilePictureChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const res = await uploadFile(`/profileImages/${profileUser._id}/`, file);

      const newUser = {
        ...profileUser,
        pictureUrl: res?.data.url || "",
      };
      
      await userUpdatePut(newUser);
      setUpdatedUser(newUser);
      setDisplayUser(newUser)
      fetchUserPosts()
    }
  };

  return (
    <div
      className="user-profile"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card variant="outlined" sx={{ maxWidth: 500, minWidth: 360 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={displayUser.pictureUrl}
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
              {displayUser.firstName} {displayUser.lastName}'s Profile
            </Typography>
          </Stack>
        </Box>
        <Divider />
        
          <Box sx={{ p: 2 }}>
          {isActiveUserProfile && (
            <Typography gutterBottom sx={{ display: "flex", gap: "30px" }}>
              <Button onClick={handleEditNameOpen} variant="contained">
                edit Name
              </Button>

              <input
                type="file"
                accept="image/*"
                id="profilePictureInput"
                style={{ display: "none" }}
                onChange={handleProfilePictureChange}
              />
              <label htmlFor="profilePictureInput">
                <Button
                  variant="contained"
                  component="span"
                  style={{ backgroundColor: "gray" }}
                >
                  edit Profile Picture
                </Button>
              </label>
            </Typography>
            )}
          </Box>
        
      </Card>
      {isActiveUserProfile && (
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
              value={updatedUser.firstName} 
              onChange={handleFirstNameChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              fullWidth
              value={updatedUser.lastName} 
              onChange={handleLastNameChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditNameClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Profile;
