'use client';

import { ChangeEvent, useState } from 'react';
import { CocktailsList } from './cocktails-list/CocktailsList';
import { SearchCocktail } from './search-cocktail/SearchCocktail';
import { ExploreCocktailsProps } from '@/@types/components/ExploreCocktails';

export function ExploreCocktails({ initialCocktails }: ExploreCocktailsProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <>
      <SearchCocktail searchTerm={searchTerm} onChange={onChange} />
      <CocktailsList
        searchTerm={searchTerm}
        initialCocktails={initialCocktails}
      />
    </>
  );
}
