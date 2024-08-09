import { User } from '@/@types/User';
import React, { Dispatch, SetStateAction } from 'react';

export const UserContext = React.createContext<null | Omit<User, 'token'>>(
  null
);

export const UserSetterContext = React.createContext<
  Dispatch<SetStateAction<Omit<User, 'token'> | null>>
>(() => {});
