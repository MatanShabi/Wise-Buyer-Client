import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CommentOutlined } from "@mui/icons-material";
import { IPost } from "../../types/post";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, description, catalog, pictureUrl, price, link, user, _id } =
    post;
  if (!user) return null;

  return (
    <Card className="mt-4" style={{ borderRadius: "0.6rem" }}>
      <CardContent style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: "1", marginRight: "20px" }}>
          <Link
            to={`/user/profile/${user._id}`}
            color="inherit"
            className="flex items-center gap-2"
          >
            <Avatar
              alt={user.firstName.toUpperCase() || ""}
              src={user.pictureUrl}
              sx={{
                width: 80,
                height: 80,
                objectFit: "none",
                borderRadius: "0.4rem",
              }}
            />
            <Typography variant="h6">
              {user.firstName} {user.lastName}
            </Typography>
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Typography variant="h6" color="textPrimary" className="flex gap-2">
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
                Comments
              </Button>
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
  );
};

export default Post;
