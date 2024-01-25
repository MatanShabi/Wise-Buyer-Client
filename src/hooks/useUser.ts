import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// TODO: create type for user
const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, []);

  const updateUser = (newUserData:any) => {
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
