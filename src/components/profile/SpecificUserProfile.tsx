import React from "react";
import { IUser } from "../../types/auth";
import {
  Avatar,
  Card,
  Box,
  Stack,
  Divider,
  Typography,
} from "@mui/material";

interface SpecificUserProfileProps {
  user?: IUser | null; 
}

const SpecificUserProfile: React.FC<SpecificUserProfileProps> =
 ({ user }) => {
  return (
    <div
      className="user-profile"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card variant="outlined" sx={{ maxWidth: 500, minWidth: 360 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={user?.pictureUrl}
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
              {user?.firstName} {user?.lastName}'s Profile
            </Typography>
          </Stack>
        </Box>
        <Divider />

        <Box sx={{ p: 2 }}>
          <Typography gutterBottom sx={{ display: "flex", gap: "30px" }}>
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default SpecificUserProfile;
