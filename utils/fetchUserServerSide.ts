import { User } from '@/@types/User';
import { cookies } from 'next/headers';
import { dummyUsers } from './dummyUser';

export async function fetchUserServerSide(): Promise<User | null> {
  try {
    const token = cookies().get('auth-token')?.value;

    if (!token) {
      return null;
    }

    const user = dummyUsers.find(user => user.token === token);

    if (!user) {
      cookies().delete('auth-token');
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
