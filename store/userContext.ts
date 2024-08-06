import { User } from '@/@types/User';
import React from 'react';

export const UserContext = React.createContext<null | Omit<User, 'token'>>(
  null
);
