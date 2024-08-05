import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/Card';
import { LinkButton } from '@/components/ui/link-button/link-button';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader>
          <div className={styles['image-container']}>
            <Image
              src="/assets/spill-cocktail.jpg"
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
          <LinkButton href="/auth/login" variant="link">
            Login
          </LinkButton>
        </CardFooter>
      </Card>
    </div>
  );
}
