import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import { refreshToken } from './auth';



export const getAuthToken = async (): Promise<string | undefined>  => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
        try {
            const { accessToken, loginTime, refreshToken:token, refreshTokenInterval } = JSON.parse(userCookie);

            if (!accessToken) {
                throw Error("Authorization token is missing");
            }

            const currentTime = dayjs();
            const elapsedTime = currentTime.diff(loginTime);

            if (elapsedTime >= refreshTokenInterval) {
                const { data: user } = await refreshToken(token);
                Cookies.set(user, 'user')
            }

            return accessToken;
        } catch (error) {
            throw Error(`Error parsing user cookie:${error}`);
        }
    }
    return undefined;
};