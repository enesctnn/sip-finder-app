import { CocktailBasket } from '@/components/cocktail-basket/CocktailBasket';
import { LogoutButton } from '@/components/logout-button/LogoutButton';
import { OpenSavedCocktailsButton } from '@/components/saved-cocktails/open-saved-cocktails-button/OpenSavedCocktailsButton';
import styles from './HeaderMenuItems.module.scss';

export function HeaderMenuItems() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <OpenSavedCocktailsButton />
        </li>
        <li>
          <CocktailBasket />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}
