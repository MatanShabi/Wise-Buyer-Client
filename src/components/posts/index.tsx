import useUser from "../../hooks/useUser";
import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import AddPost from "./AddPost";
import Post from "./Post";
import { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../api/post";
import { IPost } from "../../types/post";




const Posts = () => {
  const { user } = useUser();

  const [postList, setPostList] = useState<IPost[]>()

  const methods = useForm<IPost>({
    defaultValues: {
      title: "",
      link: "",
      catalog: "",
      pictureUrl: "",
      description: "",
      price: 0,
    }
  })

  const handleSubmitPost = async (postData: IPost) => {
    postData.user = user._id;

    const response = await createPost(postData);

    if (response?.status !== 201 || !postList) {
      console.log('Failed to create post');
      return;
    }
    
    setPostList([response?.data, ...postList]);
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
      <FormProvider {...methods}>
        <AddPost handleSubmitPost={handleSubmitPost} />
      </FormProvider>
      {
        postList ? postList.map((post: IPost) => <Post post={post} key={post._id} />)
          : <p>Loading</p>
      }

    </Container>
  );
};

export default Posts;
