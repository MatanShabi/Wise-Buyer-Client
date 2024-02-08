import { CredentialResponse } from "@react-oauth/google";
import { IUser, LoginData, SignupData } from "../types/auth";
import apiClient from "./apiClient";

export const login = async (loginData: LoginData) => {
    return apiClient.post<IUser>('auth/login', loginData);
};

export const register = async (signupData: SignupData) => {
    return await apiClient.post('auth/register', signupData);
};

export const refreshToken = async (token: string) => {
    return await apiClient.get('auth/refresh', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const googleSignin = async (credentialResponse: CredentialResponse) => {
    return await apiClient.post("/auth/google", credentialResponse)
}