import { Container } from "@mui/material";

import { useEffect, useState } from "react";
import { getUserPosts } from "../../api/post";
import { getUserById } from "../../api/user";
import { IPost } from "../../types/post";
import Post from "../posts/Post";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { IUser } from "../../types/auth";
import useUser from "../../hooks/useUser";

const ProfilePage = () => {
  const { user } = useUser();
  const [profileUser, setprofileUser] = useState<IUser>();
  const { userId } = useParams<{ userId: string }>();

  const [postList, setPostList] = useState<IPost[]>();

  const fetchUserPosts = async () => {
    const response = await getUserPosts(userId);
    if (response?.status !== 200) {
      console.error("Failed To Fetch Posts");
    }
    setPostList(response?.data || []);
  };

  const fetchUser = async () => {
    if (!userId) return;
    const res = await getUserById(userId);
    if (res) setprofileUser(res.data);
  };

  useEffect(() => {
    setprofileUser(undefined);
    fetchUserPosts();
    fetchUser();
  }, [userId]);
  const isActiveUserProfile: boolean =
    userId !== undefined && user?._id !== undefined && user?._id === userId;
  if (!profileUser) return <p>Loading</p>;

  return (
    <Container maxWidth="lg" className="my-8">
      <Profile
        profileUser={profileUser as IUser}
        isActiveUserProfile={isActiveUserProfile}
        fetchUserPosts={fetchUserPosts}
      />
      {postList ? (
        postList.map((post: IPost) => <Post post={post} key={post._id} />)
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
};

export default ProfilePage;
