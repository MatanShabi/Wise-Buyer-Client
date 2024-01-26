import useUser from "../../hooks/useUser";
import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import AddPost from "./AddPost";
import Post from "./Post";
import { Suspense, useEffect, useState } from "react";
import { getAllPosts } from "../../api/post";

export interface IPost {
  title: string;
  catalog: string;
  description: string;
  link?: string;
  productUrl?: string;
  price: number;
  userId?: string;
}


const Posts = () => {
  const { user } = useUser();

  const [postList, setPostList] = useState<IPost[]>(null)

  const methods = useForm<IPost>({
    defaultValues: {
      title: "",
      link: "",
      catalog: "",
      productUrl: "",
      description: "",
      price: 0,
    }
  })

  const handleSubmitPost = async (postData: IPost) => {
    console.log(postData)
  }

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
      postList ? postList.map((post: IPost) => <Post post={post} />)
        : <p>Loading</p>
      }

    </Container>
  );
};

export default Posts;
