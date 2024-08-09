import Image from 'next/image';
import { LinkButton } from '../ui/link-button/link-button';
import styles from './Header.module.scss';
import { HeaderMenuItems } from './header-menu-items/HeaderMenuItems';
import { MobileHeaderMenu } from './mobile-header-menu/MobileHeaderMenu';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <LinkButton href="/cocktails">
          <h1>Sip Finder</h1>
        </LinkButton>
        <HeaderMenuItems />
        <MobileHeaderMenu />
      </header>
      <div className={styles['main-image']}>
        <Image
          src="/assets/cocktails.jpg"
          alt="A table full of delicious cocktails"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
    </>
  );
}
