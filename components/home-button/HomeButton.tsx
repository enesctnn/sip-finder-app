'use client';

import { useUserContext } from '@/store/user-context/UserContextProvider';
import { LinkButton } from '../ui/link-button/link-button';
import styles from './HomeButton.module.scss';

export function HomeButton() {
  const user = useUserContext();

  return (
    <div className={styles['home-menu']}>
      {user && <p>Welcome back {user.username}</p>}
      <LinkButton
        href={`${user ? '/cocktails' : '/auth/login'}`}
        variant="link"
      >
        {!user ? 'Login' : `Go to cocktails`}
      </LinkButton>
    </div>
  );
}
