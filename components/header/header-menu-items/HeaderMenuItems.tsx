import { CocktailBasket } from '@/components/cocktail-basket/CocktailBasket';
import { LogoutButton } from '@/components/logout-button/LogoutButton';
import styles from './HeaderMenuItems.module.scss';

export function HeaderMenuItems() {
  return (
    <menu className={styles.menu}>
      <CocktailBasket />
      <LogoutButton />
    </menu>
  );
}
