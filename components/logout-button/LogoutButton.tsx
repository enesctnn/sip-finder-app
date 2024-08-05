'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button/button';
import { RiLogoutCircleLine } from 'react-icons/ri';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok && response.redirected) {
        router.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['logout-form']}>
      <Button type="submit" variant="ghost">
        <RiLogoutCircleLine />
        Logout
      </Button>
    </form>
  );
}
