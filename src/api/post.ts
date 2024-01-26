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
