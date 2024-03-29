import { Container, List, Paper } from "@mui/material";
import Post from "../posts/Post";
import { useEffect, useState } from "react";
import { IPost } from "../../types/post";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostById, getPostById, updatePost } from "../../api/post";
import { AddComment } from "../comments/AddComment";
import { Comment } from "../comments/Comment";
import { getCommentsOfPost } from "../../api/comment";
import { IComment } from "../../types/comment";

const CommentsPage = () => {
  const navigate = useNavigate()
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [commentList, setCommentList] = useState<IComment[]>();

  const fetchPost = async () => {
    if (!postId) return;
    const res = await getPostById(postId);
    if (res) setPost(res.data);
  };

  const fetchComments = async () => {
    if (!postId) return;
    const res = await getCommentsOfPost(postId);
    if (res) setCommentList(res.data);
  };

  const handleUpdatePost = async (updatedPostData: IPost) => {
    await updatePost(updatedPostData);
    setPost(updatedPostData)
  };

  const handleDeletePost = async (postId: string) => {
    await deletePostById(postId);
    navigate('/post')
  };


  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <Container maxWidth="lg" className="my-8">
      {post ? (
        <>
          <Post post={post} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost}/>
          <Paper className="mt-4 p-4">
            <AddComment setPost={setPost as React.Dispatch<React.SetStateAction<IPost | null>>}
              fetchComments={fetchComments} post={post} />
          </Paper>
          <List>
            {commentList ? (
              commentList.map((comment: IComment) => (
                <Comment
                  key={comment._id}
                  description={comment.description}
                  user={comment.user}
                />
              ))
            ) : (
              <p>Loading comments...</p>
            )}
          </List>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </Container>
  );
};

export default CommentsPage;
