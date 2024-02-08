import { Container, List } from "@mui/material";
import Post from "../posts/Post";
import { useEffect, useState } from "react";
import { IPost } from "../../types/post";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api/post";
import { AddComment } from "../comments/AddComment";
import { Comment } from "../comments/Comment";
import { getCommentsOfPost } from "../../api/comment";
import { IComment } from "../../types/comment";

const CommentsPage = () => {
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

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <Container maxWidth="lg" className="my-8">
      {post ? <Post post={post} /> : <p>Loading</p>}
      <AddComment fetchComments={fetchComments} postId={post?._id || ""} />
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
          <p>Loading</p>
        )}
      </List>
    </Container>
  );
};

export default CommentsPage;
