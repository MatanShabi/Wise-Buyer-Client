import Cookies from 'js-cookie';

// TODO: refresh token here
export const getAuthToken = (): string | undefined => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
        try {
            const { accessToken } = JSON.parse(userCookie);

            if (!accessToken) {
                throw Error("Authorization token is missing");
            }

            return accessToken;
        } catch (error) {
            throw Error(`Error parsing user cookie:${error}`);
        }
    }
    return undefined;
};