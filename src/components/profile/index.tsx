import { Container } from "@mui/material";

import { useEffect, useState } from "react";
import {  getUserPosts } from "../../api/post";
import {  getUserById } from "../../api/user";
import { IPost } from "../../types/post";
import Post from "../posts/Post";
import MyProfile from "./MyProfile";
import SpecificUserProfile from "./SpecificUserProfile";
import { useParams } from 'react-router-dom';
import { getAuthToken } from "../../api/utils";
import { IUser } from "../../types/auth";
import { AxiosResponse } from "axios";
import useUser from "../../hooks/useUser";

const ProfilePage = () => {
    const { user } = useUser();
    const [profileUser, setprofileUser] = useState<IUser | null>(null);
    const { userId } = useParams<{ userId: string }>();

    const [postList, setPostList] = useState<IPost[]>()
    
    const fetchUserPosts = async () => {
        let tmpUserId : string = "";
      if (userId == null || userId == undefined)   
      {
        const token = getAuthToken();
        console.log("token:" + token);
        const userIdPart = token?.split('.')[1]; // Split the token and store the second part
        tmpUserId = userIdPart ? JSON.parse(atob(userIdPart))._id : undefined; // Parse and extract the _id, or set userId to undefined if userIdPart is falsy
        console.log(userIdPart);
      }
      console.log(userId);
      let response : AxiosResponse<any, any> | undefined;
      if (tmpUserId == "") response = await getUserPosts(userId);
      else response = await getUserPosts(tmpUserId);
      
      if (response?.status !== 200) {
        console.error('Failed To Fetch Posts')
      }
  
      setPostList(response?.data || [])
    }

    const fetchUser = async () => {
        console.log("userId: " + userId);
        if (userId != null && userId != undefined)     
        {
            console.log("userId: " + userId);
            const res = await getUserById(userId);
            if (res) {
                setprofileUser(res.data);
            }
        }
    }
  
    useEffect(() => {
      fetchUserPosts()
      fetchUser()
    })
  
    return (
      <Container maxWidth="lg" className="my-8">
        {(userId && user?._id != userId) ? <SpecificUserProfile user={profileUser} /> : <MyProfile />}
    {
        postList ? postList.map((post: IPost) => <Post post={post} key={post._id} />)
          : <p>Loading</p>
    }
  
      </Container>
    );
  };
  
  export default ProfilePage;
  