import Image from 'next/image';
import styles from './Header.module.scss';
import { LogoutButton } from '../logout-button/LogoutButton';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Sip Finder</h1>
        {/* TODO: Cocktails Basket */}
        {/* TODO: Saved Cocktails */}
        <LogoutButton />
      </header>
      <div className={styles['main-image']}>
        <Image
          src="/assets/coctails.jpg"
          alt="A table full of delicious cocktails"
          width={5600}
          height={3200}
        />
      </div>
    </>
  );
}
