'use client';

import { fetchCocktailsByName } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { CocktailCard } from '../../cocktail-card/CocktailCard';
import styles from './CocktailsList.module.scss';

export function CocktailsList({ searchTerm }: { searchTerm: string }) {
  const { data } = useQuery({
    queryKey: ['search-cocktails', searchTerm],
    queryFn: () => fetchCocktailsByName(searchTerm),
  });

  return (
    data?.drinks && (
      <ul className={styles.cocktails}>
        {data.drinks.slice(0, 12).map(cocktail => (
          <li key={cocktail.idDrink}>
            <CocktailCard cocktail={cocktail} />
          </li>
        ))}
      </ul>
    )
  );
}
