import useUser from "../../hooks/useUser";
import { Container } from "@mui/material";

import AddPost from "./AddPost";
import Post from "./Post";
import { useEffect, useState } from "react";
import { createPost, getAllPosts, updatePost } from "../../api/post";
import { IPost } from "../../types/post";

const Posts = () => {
  const { user } = useUser();

  const [postList, setPostList] = useState<IPost[]>([])

  const handleSubmitPost = async (postData: IPost) => {
    postData.user = user._id;

    const response = await createPost(postData);

    if (response?.status !== 201 || !postList) {
      console.log('Failed to create post');
      return;
    }

    setPostList([response?.data, ...postList]);
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

  const fetchAllPosts = async () => {
    const response = await getAllPosts();

    if (response?.status !== 200) {
      console.error('Failed To Fetch Posts')
    }

    setPostList(response?.data || [])
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])

  return (
    <Container maxWidth="lg" className="my-8">
      <AddPost handleSubmitPost={handleSubmitPost} />
      {
        postList.length ? postList.map((post: IPost, index: number) =>
          <Post post={post}
            key={post._id}
            index={index}
            handleUpdatePost={handleUpdatePost} />)
          : <p>Loading</p>
      }
    </Container>
  );
};

export default Posts;
