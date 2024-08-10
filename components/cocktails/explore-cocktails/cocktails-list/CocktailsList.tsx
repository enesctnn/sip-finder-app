'use client';

import { fetchCocktailsByName } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { CocktailCard } from '../../cocktail-card/CocktailCard';
import { CocktailStatus } from './cocktail-status/CocktailStatus';
import styles from './CocktailsList.module.scss';

export function CocktailsList({ searchTerm = '' }: { searchTerm: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['search-cocktails', searchTerm],
    queryFn: () => fetchCocktailsByName(searchTerm),
  });

  return (
    <>
      {data?.drinks && (
        <ul className={styles.cocktails}>
          {data.drinks.slice(0, 12).map(cocktail => (
            <li key={cocktail.idDrink}>
              <CocktailCard cocktail={cocktail} />
            </li>
          ))}
        </ul>
      )}

      {isLoading && (
        <CocktailStatus
          title="Cocktails Loading . . ."
          src="/assets/pouring-cocktail.gif"
          alt="pouring wiskey gif."
          className={styles.pulse}
        />
      )}

      {data && !data?.drinks && (
        <CocktailStatus
          title="The searched cocktail was not found."
          src="/assets/bartender.gif"
          alt="bartender wiping the glass."
        />
      )}

      {isError && (
        <CocktailStatus
          title="Error! Failed to fetch cocktails."
          src="/assets/fail-bartending.gif"
          alt="himym bartender failure glass breaking."
        />
      )}
    </>
  );
}
