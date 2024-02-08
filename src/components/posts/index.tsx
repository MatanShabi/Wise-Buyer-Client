import useUser from "../../hooks/useUser";
import { Container, Paper, TextField } from "@mui/material";

import AddPost from "./AddPost";
import Post from "./Post";
import { ChangeEvent, useEffect, useState } from "react";
import { createPost, deletePostById, getAllPosts, updatePost } from "../../api/post";
import { IPost } from "../../types/post";

const Posts = () => {
  const { user } = useUser();

  const [postList, setPostList] = useState<IPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const handleSubmitPost = async (postData: IPost) => {
    postData.user = user._id;

    const response = await createPost(postData);

    if (response?.status !== 201 || !postList) {
      console.log('Failed to create post');
      return;
    }

    setPostList([response?.data, ...postList]);
    setFilteredPosts([response?.data, ...postList]);
  };

  const handleUpdatePost = async (updatedPostData: IPost, index: number) => {
    const response = await updatePost(updatedPostData);
    if(response?.status !==200){
      console.log('Failed to update post');
      return; 
    }

    const posts = [...postList];
    posts[index] = { ...posts[index], ...updatedPostData };

    setPostList(posts);
  };

  const handleDeletePost = async (postId: string) => {
    const response = await deletePostById(postId);
    if (response?.status !== 200) {
      console.error("Failed to delete post");
      return;
    }
    const posts = [...(postList ?? [])];
    const index = posts.findIndex((post) => post._id === postId);
    posts.splice(index, 1);
    setPostList(posts);
  };

  const fetchAllPosts = async () => {
    const response = await getAllPosts();

    if (response?.status !== 200) {
      console.error('Failed To Fetch Posts');
    }

    const posts = response?.data || [];
    setPostList(posts);
    setFilteredPosts(posts)
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const query = event.target.value

    const filtered = postList.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
    setSearchQuery(query)
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Container maxWidth="lg" className="my-8">
      <AddPost handleSubmitPost={handleSubmitPost} />
      <Paper className="p-2">
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Paper>
      {filteredPosts.length ? (
        filteredPosts.map((post: IPost, index: number) => (
          <Post
            post={post}
            key={post._id}
            index={index}
            handleUpdatePost={handleUpdatePost}
            handleDeletePost={handleDeletePost}
          />
        ))
      ) : (
        <p>No matching posts found.</p>
      )}
    </Container>
  );
};

export default Posts;
