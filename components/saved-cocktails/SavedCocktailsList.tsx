'use client';

import {
	useSavedCocktailsContext,
	useSavedCocktailsStatusContext,
} from '@/store/saved-cocktails-context/SavedCocktailsContextProvider';
import styles from './SavedCocktailsList.module.scss';
import { SavedCocktailsListItem } from './saved-cocktails-list-item/SavedCocktailsListItem';
import { LoadingSavedCocktails } from './saved-cocktails-list-item/loading-saved-cocktails/LoadingSavedCocktails';
import { SavedCocktailsEmptyMessage } from './saved-cocktails-list-item/saved-cocktails-empty-message/SavedCocktailsEmptyMessage';

export function SavedCocktailsList() {
  const savedCocktails = useSavedCocktailsContext();
  const status = useSavedCocktailsStatusContext();

  return (
    <div className={styles.container}>
      {savedCocktails.length > 0 && status !== 'pending' && (
        <ul className={styles['saved-cocktails-list']}>
          {savedCocktails.map(cocktail => (
            <SavedCocktailsListItem
              key={cocktail.idDrink}
              cocktail={cocktail}
            />
          ))}
        </ul>
      )}
      {savedCocktails.length <= 0 && status !== 'pending' && (
        <SavedCocktailsEmptyMessage />
      )}
      {status === 'pending' && <LoadingSavedCocktails />}
    </div>
  );
}
