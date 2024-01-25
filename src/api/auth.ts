import { WISE_BUYER_SERVER_URL } from "../constants";
import { LoginData } from "../types";

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
