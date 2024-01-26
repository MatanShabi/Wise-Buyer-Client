
import { IUser, LoginData, SignupData } from "../types";
import apiClient from "./apiClient";

export const login = async (loginData: LoginData) => {
    return apiClient.post<IUser>('auth/login', loginData);
};

export const register = async (signupData: SignupData) => {
    return await apiClient.post('auth/register', signupData);
};