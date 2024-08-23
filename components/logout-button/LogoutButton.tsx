'use client';

import { useFormStatus } from 'react-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { Button } from '../ui/button/button';
import styles from './LogoutButton.module.scss';

export function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={styles['logout-button']}
      type="submit"
      variant="ghost"
      disabled={pending}
    >
      <RiLogoutCircleLine />
      {pending ? '...' : 'Logout'}
    </Button>
  );
}
