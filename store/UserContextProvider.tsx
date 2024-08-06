'use client';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from './userContext';
import { User } from '@/@types/User';

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userSlice, setUserSlice] = useState<null | Omit<User, 'token'>>(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('/api/auth/me');
      if (!res.ok) {
        throw new Error('Error an error occured while fetching user.');
      }
      const data = await res.json();
      setUserSlice(data);
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={userSlice}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (typeof context === undefined) {
    throw new Error(
      'useUserContext must be used within a UserContextProvider'
    );
  }
  return context;
};
