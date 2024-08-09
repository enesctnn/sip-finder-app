'use client';

import { User } from '@/@types/User';
import { useContext, useEffect, useState } from 'react';
import { UserContext, UserSetterContext } from './userContext';

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userSlice, setUserSlice] = useState<null | Omit<User, 'token'>>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch('/api/auth/me', { method: 'POST' });
        if (!res.ok) return;
        const data = await res.json();
        setUserSlice(data);
      } catch (error) {
        console.log('Failed to get user details:', error);
      }
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={userSlice}>
      <UserSetterContext.Provider value={setUserSlice}>
        {children}
      </UserSetterContext.Provider>
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (typeof context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export const useUserSetterContext = () => {
  const context = useContext(UserSetterContext);
  if (context === undefined) {
    throw new Error(
      'useUserSetterContext must be used within a UserContextProvider'
    );
  }
  return context;
};
