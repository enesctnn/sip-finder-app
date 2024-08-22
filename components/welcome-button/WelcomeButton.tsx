import { fetchUserServerSide } from '@/utils/fetchUserServerSide';
import { LinkButton } from '../ui/link-button/link-button';
import styles from './WelcomeButton.module.scss';

export async function WelcomeButton() {
  const user = await fetchUserServerSide();
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
