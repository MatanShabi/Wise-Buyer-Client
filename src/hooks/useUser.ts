import { useState } from 'react';
import Cookies from 'js-cookie';
import { UserData } from '../types';

const useUser = () => {
    const storedUser = Cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const [user, setUser] = useState(parsedUser);

    const updateUser = (newUserData: UserData) => {
        setUser(newUserData);
        Cookies.set('user', JSON.stringify(newUserData), { expires: 7 });
    };

    const logoutUser = () => {
        setUser(null);
        Cookies.remove('user');
    };

    return { user, updateUser, logoutUser };
};

export default useUser;
