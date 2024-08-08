import { Provider } from '@/utils/Providers';
import styles from './layout.module.scss';
import { Header } from '@/components/header/Header';
import { CocktailBasketContextProvider } from '@/store/cocktail-basket-context/CocktailBasketContextProvider';

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <CocktailBasketContextProvider>
        <div className={styles.layout}>
          <div id="cocktail-basket-modal" />
          <div id="mobile-menu-modal" />
          <div id="confirm-modal" />
          <Header />
          {children}
        </div>
      </CocktailBasketContextProvider>
    </Provider>
  );
}

export default ProtectedLayout;
