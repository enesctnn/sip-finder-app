import { CocktailBasket } from '@/components/cocktail-basket/CocktailBasket';
import { LogoutForm } from '@/components/logout-form/LogoutForm';
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
          <LogoutForm />
        </li>
      </ul>
    </nav>
  );
}
