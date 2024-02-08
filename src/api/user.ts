import { IUser } from "../types/auth";
import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const userUpdatePut = async (user: IUser) => {   
    try {
        const token = await getAuthToken();
        return await apiClient.put<IUser>(`user/${user._id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error updating user:", error);
    }
};

export const getUserById = async (userId: String) => {   
    try {
        const token = await getAuthToken();
        return await apiClient.get<IUser>(`user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error updating user:", error);
    }
};