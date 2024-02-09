import { IPost } from "../types/post";
import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const getAllPosts = async () => {
    try {
        const token = await getAuthToken();
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
        const token = await getAuthToken();
        return apiClient.post('/post', postData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error(`Error to create post: ${postData}`, error);
    }
};

export const updatePost = async (updatedPostData: IPost) => {
    try {
        const token = await getAuthToken();
        return apiClient.put(`/post/${updatedPostData._id}`, updatedPostData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error(`Error to update post: ${updatedPostData}`, error);
    }
};

export const getUserPosts = async (userId: string | undefined) => {
    try {        
        const token = await getAuthToken();
        return apiClient.get(`/post/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const getPostById = async (postId: string | undefined) => {
    try {        
        const token = await getAuthToken();
        return apiClient.get(`/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const deletePostById = async (postId: string | undefined) => {
    try {        
        const token = await getAuthToken();
        return apiClient.delete(`/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};