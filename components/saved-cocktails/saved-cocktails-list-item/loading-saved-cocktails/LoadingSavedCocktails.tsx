import Image from 'next/image';
import styles from './LoadingSavedCocktails.module.scss';
import wineGif from '@/public/assets/glass-rotating.gif';

export function LoadingSavedCocktails() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Loading Saved Cocktails...</h2>
      <Image
        className={styles.image}
        src={wineGif}
        alt="a glass filled with wine rotating horizontally gif"
        unoptimized
      />
    </div>
  );
}
