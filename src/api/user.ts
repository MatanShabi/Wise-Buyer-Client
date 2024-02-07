import { IUser } from "../types/auth";
import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const userUpdatePut = async (user: IUser) => {   
    try {
        const token = getAuthToken();
        return await apiClient.put<IUser>(`user/${user._id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error updating user:", error);
    }
};