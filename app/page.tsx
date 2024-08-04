import { Button } from '@/components/button/button';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Welcome to Sip Finder!</h1>
        <p>
          Discover the world of cocktails with ease. Whether you&apos;re
          searching for the perfect drink or exploring new favorites, Sip Finder
          is your ultimate guide to the best cocktails around. Log in to get
          started on your flavor adventure!
        </p>
        <Button href="/auth/login">Login</Button>
      </div>
    </div>
  );
}
