'use server';

import { SavedCocktailsEmptyMessage } from '@/components/saved-cocktails/saved-cocktails-list-item/saved-cocktails-empty-message/SavedCocktailsEmptyMessage';
import { SavedCocktailsListItem } from '@/components/saved-cocktails/saved-cocktails-list-item/SavedCocktailsListItem';
import { fetchSavedCocktailsServerSide } from '@/utils/fetchSavedCocktailsServerSide';
import styles from './page.module.scss';

export default async function SavedCocktailsPage() {
  const savedCocktails = await fetchSavedCocktailsServerSide();
  return (
    <div className={styles.container}>
      {savedCocktails.length > 0 && (
        <ul className={styles['saved-cocktails-list']}>
          {savedCocktails.map(cocktail => (
            <SavedCocktailsListItem
              key={cocktail.idDrink}
              cocktail={cocktail}
            />
          ))}
        </ul>
      )}
      {savedCocktails.length <= 0 && <SavedCocktailsEmptyMessage />}
    </div>
  );
}
