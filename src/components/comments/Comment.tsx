import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { IComment } from "../../types/comment";
import { IUser } from "../../types/auth";
import { Paper } from "@mui/material";

interface CommentProps {
  description: string;
  user: IUser;
}

export const Comment: React.FC<CommentProps> = ({ description, user }) => {
  return (
    <Paper style={{ padding: "10px", marginTop: "5px" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Link to={`/profile/${user?._id}`}>
            <Avatar
              alt="User Avatar"
              src={user.pictureUrl}
              style={{ width: "70px", height: "70px" }}
            />
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary={"User Name: " + user.firstName + " " + user.lastName}
          secondary={"Comment: " + description}
          style={{ marginLeft: "20px" }}
        />
      </ListItem>
    </Paper>
  );
};

export default Comment;
