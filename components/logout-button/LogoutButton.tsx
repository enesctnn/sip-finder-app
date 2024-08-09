'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button/button';
import { RiLogoutCircleLine } from 'react-icons/ri';
import styles from './LogoutButton.module.scss';
import { useUserSetterContext } from '@/store/user-context/UserContextProvider';

export function LogoutButton() {
  const router = useRouter();

  const setUser = useUserSetterContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        setUser(null);
        router.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form
      name="logout-form"
      onSubmit={handleSubmit}
      className={styles['logout-form']}
    >
      <Button type="submit" variant="ghost">
        <RiLogoutCircleLine />
        Logout
      </Button>
    </form>
  );
}
