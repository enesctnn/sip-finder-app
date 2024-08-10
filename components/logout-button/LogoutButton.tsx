'use client';

import { useUserSetterContext } from '@/store/user-context/UserContextProvider';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Button } from '../ui/button/button';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const router = useRouter();

  const updateUser = useUserSetterContext();

  const {
    mutate: logOut,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => fetch('/api/auth/logout', { method: 'POST' }),
    onSuccess: () => {
      updateUser();
      router.push('/');
    },
  });

  const handleLogoutSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await logOut();
  };

  return (
    <form
      name="logout-form"
      onSubmit={handleLogoutSubmition}
      className={styles['logout-form']}
    >
      <Button type="submit" variant="ghost" disabled={isPending || isSuccess}>
        <RiLogoutCircleLine />
        {isPending || isSuccess ? '...' : 'Logout'}
      </Button>
    </form>
  );
}
