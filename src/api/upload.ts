import apiClient from "./apiClient";
import { getAuthToken } from "./utils";

export const uploadFile = async (destination: string, file: File) => {
    try {
        const token = await getAuthToken();

        const formData = new FormData();
        formData.append('file', file);

        return await apiClient.post(`/upload?destination=${destination}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error uploading file', error);
    }
};
