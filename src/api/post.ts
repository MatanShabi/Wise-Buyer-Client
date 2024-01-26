import { IPost } from "../components/posts";
import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const getAllPosts = async () => {
    const token = getAuthToken();

    if (!token) {
        console.error("Authorization token is missing");
    }

    try {
        return apiClient.get('/post', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const createPost = async (post: IPost) => {
    const token = getAuthToken();

    try {
        return apiClient.post('/', post, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};
