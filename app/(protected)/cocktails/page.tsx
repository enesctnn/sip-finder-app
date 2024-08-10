'use server';

import { ExploreCocktails } from '@/components/cocktails/explore-cocktails/ExploreCocktails';
import { fetchCocktailsByName } from '@/utils/api';
import { queryClient } from '@/utils/client';

export default async function CocktailsPage() {
  await queryClient.fetchQuery({
    queryKey: ['search-cocktails', ''],
    queryFn: () => fetchCocktailsByName(''),
  });

  return <ExploreCocktails />;
}
