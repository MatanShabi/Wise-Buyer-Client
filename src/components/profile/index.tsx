import useUser from "../../hooks/useUser";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import {  getUserPosts } from "../../api/post";
import { IPost } from "../../types/post";
import Post from "../posts/Post";
import ProfileInfo from "./ProfileInfo";

interface Props {
  userName: string;
  userPictureUrl: string;
}

const ProfilePage = () => {
    const { user } = useUser();
    console.log(user)   ;
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
  
    const fetchUserPosts = async () => {
      const response = await getUserPosts();
  
      if (response?.status !== 200) {
        console.error('Failed To Fetch Posts')
      }
  
      setPostList(response?.data || [])
    }
  
    useEffect(() => {
      fetchUserPosts()
    }, [])
  
    return (
      <Container maxWidth="lg" className="my-8">
        <ProfileInfo />
    
    {
        postList ? postList.map((post: IPost) => <Post post={post} key={post._id} />)
          : <p>Loading</p>
    }
  
      </Container>
    );
  };
  
  export default ProfilePage;
  