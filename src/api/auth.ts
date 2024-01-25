import { WISE_BUYER_SERVER_URL } from "../constants";
import { LoginData, SignupData } from "../types";

const AUTH_BASE_URL = `${WISE_BUYER_SERVER_URL}/auth`

export const login = async (loginData: LoginData) => {
    return await fetch(`${AUTH_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
}

export const register = async (loginData: SignupData) => {
    return await fetch(`${AUTH_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
}

