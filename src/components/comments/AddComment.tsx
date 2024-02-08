import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createComment } from "../../api/comment";
import { IComment } from "../../types/comment"; 
import useUser from "../../hooks/useUser";
import { updatePost } from "../../api/post";
import { IPost } from "../../types/post";

interface AddCommentProps {
  post: IPost;
  fetchComments?: React.Dispatch<React.SetStateAction<IComment[]>>;
  setPost?: React.Dispatch<React.SetStateAction<IPost | null>>;
}
export const AddComment: React.FC<AddCommentProps> = ({ post , fetchComments, setPost}) => {
  const { user } = useUser();
  const [commentDesctiption, setCommentDesctiption] = useState<string>("");

  const increaseCommentCount = async () => {
    if (post) {
      const updatedPost = { ...post, commentsAmount: post.commentsAmount + 1 };
      const response = await updatePost(updatedPost);
      if(response?.status !==200){
        console.log('Failed to update post');
        return; 
      }
      if (setPost) setPost(updatedPost);
    }

  }
  const handleAddComment = async () => {
    if (!commentDesctiption) return;
    const newComment: IComment = {
      description: commentDesctiption,
      post: post._id,
      user: user?._id,
    };
    const response = await createComment(post._id, newComment);
    if (response?.status !== 200) {
      console.error("Failed to create comment");
      return;
    }
    if (fetchComments) {
        fetchComments([]);
    }
    increaseCommentCount();
    setCommentDesctiption("");
  };

  return (
    <div>
      <TextField
        label="Add a comment"
        variant="outlined"
        fullWidth
        value={commentDesctiption}
        onChange={(e) => setCommentDesctiption(e.target.value)}
        margin="normal"
      />

      <Button variant="contained" color="secondary" onClick={handleAddComment}>
        Add Comment
      </Button>
    </div>
  );
};

export default AddComment;
