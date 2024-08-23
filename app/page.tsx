import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card/Card';
import { LinkButton } from '@/components/ui/link-button/link-button';
import { fetchUserServerSide } from '@/utils/fetchUserServerSide';
import Image from 'next/image';
import styles from './page.module.scss';

export default async function Home() {
  const user = await fetchUserServerSide();
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader>
          <div className={styles['image-container']}>
            <Image
              src="/assets/pouring-amber-liquor.jpg"
              alt="cocktails image"
              fill
            />
          </div>
          <CardTitle className={styles.header}>
            Welcome to Sip Finder!
          </CardTitle>
        </CardHeader>
        <CardContent className={styles.content}>
          Log in to get started on your flavor adventure!
        </CardContent>
        <CardFooter>
          <div className={styles['home-menu']}>
            {user && <p>Welcome back {user.username}</p>}
            <LinkButton
              href={`${user ? '/cocktails' : '/auth/login'}`}
              variant="link"
            >
              {!user ? 'Login' : `Go to cocktails`}
            </LinkButton>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
