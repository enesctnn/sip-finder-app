'use client';

import { ChangeEvent, useState } from 'react';
import { CocktailsList } from './cocktails-list/CocktailsList';
import { SearchCocktail } from './search-cocktail/SearchCocktail';

export function ExploreCocktails() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <>
      <SearchCocktail searchTerm={searchTerm} onChange={onChange} />
      <CocktailsList searchTerm={searchTerm} />
    </>
  );
}
