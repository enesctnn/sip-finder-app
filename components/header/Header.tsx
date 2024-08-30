import cocktailsImage from '@/public/assets/cocktails.jpg';
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
      <Image
        className={styles['main-image']}
        src={cocktailsImage}
        alt="A table full of delicious cocktails"
      />
    </>
  );
}
