import { IComment } from "../types/comment";
import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const createComment = async (postid: string, commentData: IComment) => {
  try {
    const token = getAuthToken();
    return apiClient.post(`/comments/${postid}`, commentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(`Error to create comment: ${commentData}`, error);
  }
};

export const getCommentsOfPost = async (postid: string) => {
  try {
    const token = getAuthToken();
    return apiClient.get(`/comments/${postid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(`Error to pull comments of post ${postid}`, error);
  }
};
