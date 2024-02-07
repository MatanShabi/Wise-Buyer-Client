import { IPost } from "../types/post";
import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const getAllPosts = async () => {
    try {
        const token = getAuthToken();
        return apiClient.get('/post', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const createPost = async (postData: IPost) => {
    try {
        const token = getAuthToken();
        return apiClient.post('/post', postData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const getUserPosts = async () => {
    try {        
        const token = getAuthToken();
        let userid = token?.split('.')[1];
        userid = userid ? JSON.parse(atob(userid))._id : undefined;
        console.log(userid);        

        return apiClient.get(`/post/user/${userid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};