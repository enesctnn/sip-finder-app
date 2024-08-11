import { Header } from '@/components/header/Header';
import { CocktailBasketContextProvider } from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { SavedCocktailsContextProvider } from '@/store/saved-cocktails-context/SavedCocktailsContextProvider';
import { Provider } from '@/utils/Providers';
import styles from './layout.module.scss';

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <SavedCocktailsContextProvider>
        <CocktailBasketContextProvider>
          <div className={styles.layout}>
            <div id="cocktail-basket-modal" />
            <div id="mobile-menu-modal" />
            <div id="confirm-modal" />
            <Header />
            {children}
          </div>
        </CocktailBasketContextProvider>
      </SavedCocktailsContextProvider>
    </Provider>
  );
}

export default ProtectedLayout;
