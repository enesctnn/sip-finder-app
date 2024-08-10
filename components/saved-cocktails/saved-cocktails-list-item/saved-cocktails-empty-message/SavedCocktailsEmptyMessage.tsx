import Image from 'next/image';
import styles from './SavedCocktailsEmptyMessage.module.scss';

export function SavedCocktailsEmptyMessage() {
  return (
    <div className={styles['no-cocktails-found']}>
      <section>
        <h2>No saved cocktails found.</h2>
        <p>
          If you have your cocktails in basket you can save it from there. If
          not you can save the cocktails from cocktails page.
        </p>
      </section>
      <Image
        src="/assets/crossing-arms.jpg"
        alt="waiter crossing arms"
        width={1920}
        height={1280}
      />
    </div>
  );
}
