import {
  Avatar,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CommentOutlined } from "@mui/icons-material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { IPost } from "../../types/post";
import { FC, useState } from "react";
import useUser from "../../hooks/useUser";
import PostEditMode from "./EditPost";

interface PostProps {
  post: IPost;
  index?: number;
  handleUpdatePost?: (updatedPostData: IPost, index: number) => void;
  handleDeletePost?: (postId: string) => void;
}

const Post: FC<PostProps> = ({
  post,
  index,
  handleUpdatePost,
  handleDeletePost,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { user } = useUser();
  const {
    title,
    description,
    catalog,
    pictureUrl,
    price,
    link,
    user: postUser,
    _id,
    commentsAmount,
  } = post;

  const handleDelete = () => {
    handleDeletePost && handleDeletePost(_id);
  };

  if (!user) return <></>;

  const PostViewMode = (
    <>
      <Card className="mt-4" style={{ borderRadius: "0.6rem" }}>
        <CardContent style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ flex: "1", marginRight: "20px" }}>
            <Link
              to={`/profile/${postUser?._id}`}
              color="inherit"
              className="flex items-center gap-2"
            >
              <Avatar
                alt={postUser?.firstName.toUpperCase() || ""}
                src={postUser?.pictureUrl}
              />
              <Typography variant="h6">
                {postUser?.firstName} {postUser?.lastName}
              </Typography>
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Typography
                variant="h6"
                color="textPrimary"
                className="flex gap-2"
              >
                <p>{title}</p> | <p>{catalog}</p>
              </Typography>
              <Typography color="textSecondary">{description}</Typography>
              <Typography color="textSecondary">
                Product URL:{" "}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </Typography>
              <Typography color="textSecondary">Price: {price}</Typography>
              <Typography color="textSecondary">
                <Button
                  variant="contained"
                  component={Link}
                  color="secondary"
                  to={`/comments/${_id}`}
                  startIcon={<CommentOutlined />}
                >
                  Comments ({commentsAmount || 0}) {/* Display comments count */}
                </Button>
                {postUser?._id == user._id && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                    sx={{ marginLeft: "15px" }}
                    startIcon={<EditRoundedIcon />}
                  >
                    Edit Post
                  </Button>
                )}

                {postUser?._id == user._id && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setIsDeleteDialogOpen(true);
                    }}
                    sx={{ marginLeft: "15px", backgroundColor: "lightcoral" }}
                    startIcon={<DeleteOutlineRoundedIcon />}
                  >
                    Delete Post
                  </Button>
                )}
              </Typography>
            </div>
          </div>
          {pictureUrl && (
            <div>
              <Avatar
                variant="rounded"
                src={pictureUrl}
                sx={{
                  width: 300,
                  height: 300,
                  objectFit: "none",
                  borderRadius: "0.6rem",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.7)",
                }}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  return !isEditMode ? (
    PostViewMode
  ) : (
    <>
      <PostEditMode
        post={post}
        index={index || 0}
        updateIsEditMode={setIsEditMode}
        handleUpdatePost={handleUpdatePost || (() => {})}
      />
    </>
  );
};

export default Post;
