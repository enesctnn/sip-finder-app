import { HomeButton } from '@/components/home-button/HomeButton';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/Card';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
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
          <HomeButton />
        </CardFooter>
      </Card>
    </div>
  );
}
