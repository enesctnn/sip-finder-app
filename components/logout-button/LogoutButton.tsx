'use client';

import { useUserSetterContext } from '@/store/user-context/UserContextProvider';
import { useRouter } from 'next/navigation';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Button } from '../ui/button/button';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const router = useRouter();

  const updateUser = useUserSetterContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        updateUser();
        router.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // TODO: add logout feedbacks...

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
