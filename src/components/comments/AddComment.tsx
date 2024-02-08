import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createComment, getCommentsOfPost } from "../../api/comment";
import { IComment } from "../../types/comment";
import useUser from "../../hooks/useUser";

interface AddCommentProps {
  postId: string;
  fetchComments?: React.Dispatch<React.SetStateAction<IComment[]>>;
}
export const AddComment: React.FC<AddCommentProps> = ({ postId , fetchComments}) => {
  const { user } = useUser();
  const [commentDesctiption, setCommentDesctiption] = useState<string>("");

  const handleAddComment = async () => {
    if (!commentDesctiption) return;
    const newComment: IComment = {
      description: commentDesctiption,
      post: postId,
      user: user?._id,
    };
    const response = await createComment(postId, newComment);
    if (response?.status !== 200) {
      console.error("Failed to create comment");
      return;
    }
    if (fetchComments) {
        fetchComments([]);
    }
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
