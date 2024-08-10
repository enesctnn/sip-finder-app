import Image from 'next/image';
import styles from './LoadingSavedCocktails.module.scss';

export function LoadingSavedCocktails() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Loading Saved Cocktails...</h2>
      <Image
        src="/assets/glass-rotating.gif"
        alt="a glass filled with wine rotating horizontally gif"
        width={500}
        height={400}
        className={styles.image}
				unoptimized
      />
    </div>
  );
}
