import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CommentOutlined } from "@mui/icons-material";
import { IPost } from "../../types/post";
import { FC, useState } from "react";
import EditPost from "./EditPost";
import useUser from "../../hooks/useUser";

interface PostProps {
    post: IPost;
    index: number;
    handleUpdatePost: (updatedPostData: IPost, index: number) => void
}

const Post: FC<PostProps> = ({ post, index, handleUpdatePost }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const { user } = useUser();
    const { title, description, catalog, pictureUrl, price, link, user: postUser, _id } = post;

    if (!user) return <></>;

    const PostViewMode = (
        <Card className="mt-4" style={{ borderRadius: '0.6rem' }}>
            <CardContent style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ flex: '1', marginRight: '20px' }}>
                    <Link to={`/user/profile/${postUser?._id}`} color="inherit" className="flex items-center gap-2">
                        <Avatar alt={user.firstName.toUpperCase() || ""} src={user.pictureUrl} />
                        <Typography variant="h6">
                            {postUser?.firstName} {postUser?.lastName}
                        </Typography>
                    </Link>
                    <div className="flex flex-col gap-2 mt-4">
                        <Typography variant="h6" color="textPrimary" className="flex gap-2">
                            <p>{title}</p> | <p>{catalog}</p>
                        </Typography>
                        <Typography color="textSecondary">
                            {description}
                        </Typography>
                        <Typography color="textSecondary">
                            Product URL: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        </Typography>
                        <Typography color="textSecondary">
                            Price: {price}
                        </Typography>
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
                            {postUser?._id == user._id &&
                                <Button
                                    variant="contained"
                                    onClick={() => { setIsEditMode(true) }}
                                    startIcon={<CommentOutlined />}
                                >
                                    Edit Post
                                </Button>
                            }
                        </Typography>
                    </div>
                </div>
                {pictureUrl && (
                    <div style={{ flex: '1' }}>
                        <img src={pictureUrl} alt="Product Image" className="w-full h-[40rem] p-5 border-[#0000001f] border" />
                    </div>
                )}
            </CardContent>
        </Card>
    )

    return (
        !isEditMode ? PostViewMode : <EditPost
            post={post}
            index={index}
            updateIsEditMode={setIsEditMode}
            handleUpdatePost={handleUpdatePost} />
    );
};

export default Post;
