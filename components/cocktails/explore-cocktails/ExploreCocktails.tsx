'use client';

import { fetchCocktailsByName } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { CocktailsList } from './cocktails-list/CocktailsList';
import { SearchCocktail } from './search-cocktail/SearchCocktail';

export function ExploreCocktails() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const { data } = useQuery({
    queryKey: ['search-cocktails', searchTerm],
    queryFn: () => fetchCocktailsByName(searchTerm),
		
  });

  return (
    <>
      <SearchCocktail searchTerm={searchTerm} onChange={onChange} />
      {data?.drinks && <CocktailsList cocktails={data.drinks} />}
    </>
  );
}
